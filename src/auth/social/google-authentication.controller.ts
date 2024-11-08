import { Body, Controller, Post } from '@nestjs/common';
import { GoogleTokenDto } from './dto/googleToken.dto';
import { Auth } from '../decorators/auth.decorator';
import { AuthType } from '../enums/authType.enum';
import { GoogleAuthenticationService } from './providers/google-authentication.service';

@Auth(AuthType.None)
@Controller('google-authentication')
export class GoogleAuthenticationController {
  constructor(
    private readonly googleAuthService: GoogleAuthenticationService,
  ) {}

  @Post()
  public authenticate(@Body() googleTokenDto: GoogleTokenDto) {
    return this.googleAuthService.authenticate(googleTokenDto);
  }
}
