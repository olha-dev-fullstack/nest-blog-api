import {
  forwardRef,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { SignInDto } from '../dto/signin.dto';
import { HashingProvider } from './hashing.provider';
import { handleDbError } from 'src/common/utils/exception.util';
import { TokensProvider } from './tokens.provider';
import { RefreshTokenDto } from '../dto/refreshToken.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
    private readonly hashingProvider: HashingProvider,
    private readonly tokensProvider: TokensProvider,
  ) {}

  public async signIn(signInDto: SignInDto) {
    const user = await this.usersService.findOneByEmail(signInDto.email);
    const isEqual = await handleDbError(
      () =>
        this.hashingProvider.comparePassword(signInDto.password, user.password),
      { description: 'Could not compare passwords' },
    );
    if (!isEqual) {
      throw new UnauthorizedException('Incorrect Password');
    }

    return this.tokensProvider.generateTokens(user);
  }

  public async refreshTokens(refreshTokensDto: RefreshTokenDto) {
    return this.tokensProvider.refreshTokens(refreshTokensDto)
  }
}
