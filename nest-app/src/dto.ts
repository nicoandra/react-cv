import { IsEmail, IsNotEmpty, IsAlphanumeric} from 'class-validator';
export class ContactFormMessageExternalRequest {
  @IsNotEmpty() @IsAlphanumeric() reCaptchaToken: string;
  @IsNotEmpty() contactName: string;
  @IsEmail() contactEmail: string;
  @IsNotEmpty() contactMessage: string;
  @IsNotEmpty() contactSubject: string;
}

export class ContactFormMessageExternalResponse {
  error: string | null;
  result: string | null;
}

export class ContactFormSendPayload {
  contactName: string;
  contactEmail: string;
  contactMessage: string;
  contactSubject: string;
  referrer: string;
}
