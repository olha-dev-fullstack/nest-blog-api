import { BadRequestException, forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dto/getUsersPAram.dto';
import { AuthService } from 'src/auth/providers/auth.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { CreateUserDto } from '../dto/createUser.dto';

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
  ) {}
  /**
   * Method to get all users from the database
   */
  public async findAll(
    getUsersParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    const isAuth = this.authService.isAuth();
    return 'Users array';
  }
  /**
   * Method to get specifec user by id from the database
   */
  public async findOneById(id: string) {
    return `User with id ${id}`;
  }

  public async create(createUserDto: CreateUserDto) {
    const user = await this.usersRepository.findOne({
      where: { email: createUserDto.email },
    });
    if (user) {
      throw new BadRequestException('User already exist')
    }
    let newUser = this.usersRepository.create(createUserDto)
    return this.usersRepository.save(newUser)
  }
}
