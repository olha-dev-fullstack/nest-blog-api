import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from 'src/users/user.entity';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  public async sendUserWelcome(user: User): Promise<void> {
    await this.mailerService.sendMail({
        to: user.email,
        subject: 'Welcome to Nestjs Blog',
        template: './welcome',
        context: {
            name: user.firstName,
            email: user.email,
            loginUrl: 'http://localhost:3000'
        }
    })
  }
}
