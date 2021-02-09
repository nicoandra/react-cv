import { Body, Controller, Get, Post, Param, Req, UseInterceptors, UploadedFile, UploadedFiles } from '@nestjs/common';
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import {
  ContactFormMessageExternalRequest,
  ContactFormMessageExternalResponse,
  ContactFormSendPayload,
} from './dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/contactform-onsubmit')
  async contactFormSubmit(
    @Body() body: ContactFormMessageExternalRequest,
    @Req() req,
  ): Promise<ContactFormMessageExternalResponse> {
    const { reCaptchaToken } = body;
    if (reCaptchaToken === undefined) {
      return Promise.resolve(<ContactFormMessageExternalResponse>{
        error: 'No reCaptchaToken',
        result: null,
      });
    }

    const isHumanRequest = await this.appService.validateRecaptcha(
      reCaptchaToken,
    );

    const referrer = req.header('Referer');
    const request = <ContactFormSendPayload>{ ...body, referrer };
    const hasBeenSent = isHumanRequest && this.appService.sendContactFormByEmail(request);

    return Promise.resolve(<ContactFormMessageExternalResponse>{
      error: null,
      result: hasBeenSent
        ? 'Message has been sent. Thanks'
        : 'Captcha worked, but the email failed AF! :x',
    });
  }



  @Post('/serverboot-onsubmit/' + process.env['BOOTSERVER_TOKEN'])
  @UseInterceptors(AnyFilesInterceptor())
  async serverBootSubmit(
    @UploadedFiles() files,
  ): Promise<string> {

    const content = files?.map((l) => {
      return `Original filename: ${l.originalname}
      
      Content:
      ` + l.buffer.toString()
    }) || 'No content'

    const payload = new ContactFormSendPayload({
      contactName: "Remote server",
      contactEmail: "email",
      contactMessage: content,
      contactSubject: "Server booting",
      referrer: "Server",
    })

    return this.appService.sendContactFormByEmail(payload).toString();

  }  
}
