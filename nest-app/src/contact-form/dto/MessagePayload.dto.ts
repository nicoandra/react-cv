export class MessagePayload {
    contactName: string;
    contactEmail: string;
    contactMessage: string;
    contactSubject: string;
    referrer: string;
  
    constructor(partial: Partial<MessagePayload>) {
      Object.assign(this, partial);
    }
  }
  