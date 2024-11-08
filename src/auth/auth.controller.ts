import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './providers/auth.service';
import { SignInDto } from './dto/signin.dto';
import { Auth } from './decorators/auth.decorator';
import { AuthType } from './enums/authType.enum';
import { RefreshTokenDto } from './dto/refreshToken.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/sign-in')
  @HttpCode(HttpStatus.OK)
  @Auth(AuthType.None)
  public async signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }

  @Post('/refresh-tokens')
  @HttpCode(HttpStatus.OK)
  @Auth(AuthType.None)
  public async refreshTokens(@Body() refreshTokenDto: RefreshTokenDto) {
    return this.authService.refreshTokens(refreshTokenDto);
  }
}
