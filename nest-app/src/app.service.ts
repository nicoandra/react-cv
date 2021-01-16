import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ContactFormSendPayload } from './dto';
@Injectable()
export class ExampleService {}

import fetch from 'node-fetch';

@Injectable()
export class AppService {
  constructor(private readonly mailerService: MailerService) {}

  async validateRecaptcha(clientToken: string): Promise<boolean> {
    const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY,
      response = clientToken;

    return fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${SECRET_KEY}&response=${response}`,
    })
      .then((r) => r.json())
      .then((r) => {
        console.log('response says', r);
        return r.success ? true : false;
      })
      .catch((e) => {
        console.error('Was not able to retrieve recaptcha token', e);
        return false;
      });
  }

  async sendContactFormByEmail(data: ContactFormSendPayload): Promise<boolean> {
    const context = Object.keys(data).reduce((acc, fieldName) => {
      acc[fieldName.replace('contact', '')] = data[fieldName];
      return acc;
    }, {});

    console.log('Context to mail', context);
    return this.mailerService.sendMail({
      to: process.env.EMAIL_TO,
      from: process.env.EMAIL_FROM,
      subject: 'Contact form filled in - ✔',
      template: 'contactform-post',
      context,
    });
    return Promise.resolve(true);
  }
}
