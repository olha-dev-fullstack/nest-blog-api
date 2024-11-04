import {
  BadRequestException,
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  RequestTimeoutException,
  UnauthorizedException,
} from '@nestjs/common';
import { GetUsersParamDto } from '../dto/getUsersPAram.dto';
import { AuthService } from 'src/auth/providers/auth.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { CreateUserDto } from '../dto/createUser.dto';
import profileConfig from '../config/profile.config';
import { ConfigType } from '@nestjs/config';
import { UsersCreateManyProvider } from './users-create-many.provider';
import { CreateManyUsersDto } from '../dto/createManyUsers.dto';
import { handleDbError } from 'src/common/utils/exception.util';
import { CreateUserProvider } from './create-user.provider';
import { throws } from 'assert';

/**
 * Class to connect to Users table and perform business opearations
 */
@Injectable()
export class UsersService {
  /**
   * Injecting Auth service
   */
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @Inject(profileConfig.KEY)
    private readonly profileConfiguration: ConfigType<typeof profileConfig>,
    private readonly usersCreateManyProvider: UsersCreateManyProvider,
    private readonly createUserProvider: CreateUserProvider,
  ) {}
  /**
   * Method to get all users from the database
   */
  public async findAll(
    getUsersParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    throw new HttpException(
      {
        status: HttpStatus.MOVED_PERMANENTLY,
        error: 'The API endopint does not exist',
        fileName: 'users.service.ts',
        lineNumber: 88,
      },
      HttpStatus.MOVED_PERMANENTLY,
      {
        cause: new Error(),
        description: 'Occured because abrikos',
      },
    );
  }
  /**
   * Method to get specifec user by id from the database
   */
  public async findOneById(id: number) {
    let user = undefined;
    user = await handleDbError(() =>
      this.usersRepository.findOneByOrFail({ id }),
    );
    return user;
  }

  public async findOneByEmail(email: string) {
    const user = await handleDbError(
      () => this.usersRepository.findOneBy({ email }),
      { description: 'Could not fetch the user' },
    );
    if (!user) {
      throw new UnauthorizedException('User does not exist');
    }
    return user;
  }

  public async create(createUserDto: CreateUserDto) {
    return this.createUserProvider.create(createUserDto);
  }

  public async createMany(createUsersDto: CreateManyUsersDto) {
    return this.usersCreateManyProvider.createMany(createUsersDto);
  }
}
