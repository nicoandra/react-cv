import { IsEmail, IsNotEmpty, IsAlphanumeric } from 'class-validator';
export class ContactFormPostMessageRequest {
  @IsNotEmpty()
  @IsAlphanumeric()
  reCaptchaToken: string;
  
  @IsNotEmpty()
  contactName: string;
  
  @IsEmail()
  contactEmail: string;
  
  @IsNotEmpty()
  contactMessage: string;
  
  @IsNotEmpty()
  contactSubject: string;
}
