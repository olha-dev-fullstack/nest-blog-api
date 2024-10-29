import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class PostsService {
  constructor(private readonly usersService: UsersService) {}

  public async findAll(userId: string) {
    const user = this.usersService.findOneById(userId);
    return `All posts from user ${userId}`;
  }
}
