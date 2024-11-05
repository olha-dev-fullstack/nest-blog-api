import {
  BadRequestException,
  ConflictException,
  forwardRef,
  Inject,
  Injectable,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/createUser.dto';
import { handleDbError } from 'src/common/utils/exception.util';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { Repository } from 'typeorm';
import { HashingProvider } from 'src/auth/providers/hashing.provider';
import { IGoogleUser } from '../interfaces/googleUser.interface';

@Injectable()
export class CreateUserProvider {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
    @Inject(forwardRef(() => HashingProvider))
    private readonly hashingProvider: HashingProvider,
  ) {}

  public async create(createUserDto: CreateUserDto) {
    let user = undefined;
    user = await handleDbError(() =>
      this.usersRepository.findOne({
        where: { email: createUserDto.email },
      }),
    );
    if (user) {
      throw new BadRequestException('User already exist');
    }
    let newUser = await this.usersRepository.create({
      ...createUserDto,
      password: await this.hashingProvider.hashPassword(createUserDto.password),
    });

    newUser = await handleDbError(() => this.usersRepository.save(newUser));
    return newUser;
  }

  public async createGoogleUser(googleUser: IGoogleUser) {
    try {
      const user = this.usersRepository.create(googleUser);
      return this.usersRepository.save(user);
    } catch (e) {
      throw new ConflictException(e, {
        description: 'Could not create a new user',
      });
    }
  }
}
