import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dto/createPost.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '../post.entity';
import { Repository } from 'typeorm';
import { MetaOption } from 'src/meta-options/metaOption.entity';

@Injectable()
export class PostsService {
  constructor(
    private readonly usersService: UsersService,
    @InjectRepository(Post) private postsRepository: Repository<Post>,
    @InjectRepository(MetaOption)
    private metaOptionsRepository: Repository<MetaOption>,
  ) {}

  public async findAll(userId: string) {
    const user = this.usersService.findOneById(userId);
    return `All posts from user ${userId}`;
  }

  public async create(data: CreatePostDto) {
    let metaOptions = data.metaOptions
      ? this.metaOptionsRepository.create(data.metaOptions)
      : null;
    const post = this.postsRepository.create(data);
    if (metaOptions) {
      await this.metaOptionsRepository.save(metaOptions);
      post.metaOptions = metaOptions;
    }
    return this.postsRepository.save(post);
  }
}
