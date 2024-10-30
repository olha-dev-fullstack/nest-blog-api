import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dto/createPost.dto';

@Injectable()
export class PostsService {
  constructor(private readonly usersService: UsersService) {}

  public async findAll(userId: string) {
    const user = this.usersService.findOneById(userId);
    return `All posts from user ${userId}`;
  }

  public async create(data: CreatePostDto) {
    return data;
  }
}
