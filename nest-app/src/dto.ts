export class ContactFormMessageExternalRequest {
  reCaptchaToken: string;
  contactName: string;
  contactEmail: string;
  contactMessage: string;
  contactSubject: string;
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
