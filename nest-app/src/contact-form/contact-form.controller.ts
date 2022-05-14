import {
  Body,
  Controller,
  Post,
  Req,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { ContactFormService } from './contact-form.service';

import { ContactFormPostMessageRequest } from './dto/PostMessageRequest.dto';
import { ContactFormPostMessageResponse } from './dto/PostMessageResponse.dto';
import { MessagePayload } from './dto/MessagePayload.dto';
@Controller('/contactform')
export class ContactFormController {
  constructor(private readonly contactFormService: ContactFormService) {}

  @Post('/submit')
  async contactFormSubmit(
    @Body() body: ContactFormPostMessageRequest,
    @Req() req,
  ): Promise<ContactFormPostMessageResponse> {
    const { reCaptchaToken } = body;
    if (reCaptchaToken === undefined) {
      return Promise.resolve(<ContactFormPostMessageResponse>{
        error: 'No reCaptchaToken',
        result: null,
      });
    }

    const isHumanRequest = await this.contactFormService.validateRecaptcha(
      reCaptchaToken,
    );

    if (!isHumanRequest) {
      return Promise.resolve(<ContactFormPostMessageResponse>{
        error: null,
        result: "Captcha validation did not pass. Are you a human?"
      });
    }

    const referrer = req.header('Referer');
    const request = <MessagePayload>{ ...body, referrer };
    const hasBeenSent =
      isHumanRequest && this.contactFormService.sendContactFormByEmail(request);

    return Promise.resolve(<ContactFormPostMessageResponse>{
      error: null,
      result: hasBeenSent
        ? 'Message has been sent. Thanks'
        : 'Captcha worked, but the email failed AF! :x',
    });
  }

  @Post('/serverboot')
  @UseInterceptors(AnyFilesInterceptor())
  async serverBootSubmit(@UploadedFiles() files): Promise<string> {
    const content =
      files?.map((l) => {
        return (
          `Original filename: ${l.originalname}
      
      Content:
      ` + l.buffer.toString()
        );
      }) || 'No content';

    const payload = new MessagePayload({
      contactName: 'Remote server',
      contactEmail: 'email',
      contactMessage: content,
      contactSubject: 'Server booting',
      referrer: 'Server',
    });

    return this.contactFormService.sendContactFormByEmail(payload).toString();
  }
}
