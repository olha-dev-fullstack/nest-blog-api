import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dto/createPost.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '../post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    private readonly usersService: UsersService, 
    @InjectRepository(Post) private postsRepository: Repository<Post>) {}

  public async findAll(userId: string) {
    const user = this.usersService.findOneById(userId);
    return `All posts from user ${userId}`;
  }

  public async create(data: CreatePostDto) {
    const newPost = this.postsRepository.create(data);
    return this.postsRepository.save(newPost);
  }
}
