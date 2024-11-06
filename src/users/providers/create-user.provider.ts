import {
  BadRequestException,
  ConflictException,
  forwardRef,
  Inject,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/createUser.dto';
import { handleDbError } from 'src/common/utils/exception.util';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { Repository } from 'typeorm';
import { HashingProvider } from 'src/auth/providers/hashing.provider';
import { IGoogleUser } from '../interfaces/googleUser.interface';
import { MailService } from 'src/mail/providers/mail.service';

@Injectable()
export class CreateUserProvider {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
    @Inject(forwardRef(() => HashingProvider))
    private readonly hashingProvider: HashingProvider,
    private readonly mailService: MailService,
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
    
    try {
      await this.mailService.sendUserWelcome(newUser);
    } catch (e) {
      throw new RequestTimeoutException(e);
    }
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
