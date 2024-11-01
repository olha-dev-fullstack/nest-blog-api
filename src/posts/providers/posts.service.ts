import {
  Injectable,
  NotFoundException,
  RequestTimeoutException,
} from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dto/createPost.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '../post.entity';
import { Repository } from 'typeorm';
 import { TagsService } from 'src/tags/providers/tags.service';
import { UpdatePostDto } from '../dto/updatePost.dto';
import { MetaOptionsService } from 'src/meta-options/providers/metaOptions.service';

@Injectable()
export class PostsService {
  constructor(
    private readonly usersService: UsersService,
    private readonly tagsService: TagsService,
    private readonly metaOptionsService: MetaOptionsService,

    @InjectRepository(Post) private postsRepository: Repository<Post>,
  ) {}

  public async findAll(userId: number) {
    // const user = this.usersService.findOneById(userId);
    return this.postsRepository.find({
      relations: {
        metaOptions: true,
      },
    });
  }

  public async delete(id: number) {
    await this.postsRepository.delete(id);
    return { deleted: true, id };
  }

  public async create(data: CreatePostDto) {
    const author = await this.usersService.findOneById(data.authorId);
    const tags = await this.tagsService.findMultipleTags(data.tags);
    const post = this.postsRepository.create({
      ...data,
      author,
      tags,
    });
    return this.postsRepository.save(post);
  }

  public async update(postId: number, updatePostDto: UpdatePostDto) {
    const post = await this.postsRepository.findOneByOrFail({ id: postId });
    if (updatePostDto.metaOptions && post.metaOptions) {
      try {
        const newMetaOptions = await this.metaOptionsService.update(
          post.metaOptions.id,
          updatePostDto.metaOptions,
        );
        post.metaOptions = newMetaOptions;
        delete updatePostDto.metaOptions;
      } catch (e) {
        throw new RequestTimeoutException();
      }
    }
    if (updatePostDto.tags) {
      try {
        const tags = await this.tagsService.findMultipleTags(
          updatePostDto.tags,
        );
        post.tags = tags;
        delete updatePostDto.tags;
      } catch (e) {
        throw new NotFoundException('Tags not found');
      }
      Object.assign(post, updatePostDto);
      try {
        return this.postsRepository.save(post);
      } catch (e) {
        throw new RequestTimeoutException();
      }
    }
  }
}
