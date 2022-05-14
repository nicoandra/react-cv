import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
import { ContactFormModule } from './contact-form/contact-form.module';

const mailerModule = MailerModule.forRoot({
  transport: process.env.SMTP_TRANSPORT_SPECIFICATION,
  defaults: {
    from: process.env.APPLICATION_NAME + ' <apps@nmac.com.ar>',
  },
  template: {
    dir: __dirname + '/templates',
    adapter: new EjsAdapter(),
    options: {
      strict: true,
    },
  },
});

@Module({
  imports: [mailerModule, ContactFormModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
