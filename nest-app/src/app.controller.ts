import { Body, Controller, Get, Post, Req } from '@nestjs/common';
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



  @Post('/serverboot-onsubmit')
  async serverBootSubmit(
    @Body() body,
    @Req() req,
  ): Promise<string> {

    console.log("The body is", body)
    return "The body is" + body

  }  
}
