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
  async getHelloAgain(
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

    console.log('Message received', { ...body, isHumanRequest });

    const referrer = req.header('Referer');
    const request = <ContactFormSendPayload>{ ...body, referrer };
    const hasBeenSent = this.appService.sendContactFormByEmail(request);

    return Promise.resolve(<ContactFormMessageExternalResponse>{
      error: null,
      result: hasBeenSent
        ? 'Message has been sent. Thanks'
        : 'Captcha worked, but the email failed AF! :x',
    });
  }
}
