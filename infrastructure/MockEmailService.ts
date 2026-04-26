import type { IEmailService } from "../domain/Interfaces/EmailService.js";

export class MockEmailService implements IEmailService {
  async sendEmail(to: string, subject: string, body: string): Promise<void> {
    console.log(
      `Mock email sent to ${to} with subject "${subject}" and body "${body}".`,
    );
  }
}
