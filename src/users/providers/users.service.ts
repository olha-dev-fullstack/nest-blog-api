import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dto/getUsersPAram.dto';
import { AuthService } from 'src/auth/providers/auth.service';

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
}
