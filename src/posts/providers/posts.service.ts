import {
  BadRequestException,
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
import { GetPostsDto } from '../dto/getPosts.dto';
import { PaginationProvider } from 'src/common/pagination/providers/pagination.provider';
import { Paginated } from 'src/common/pagination/interfaces/paginated.interface';
import { handleDbError } from 'src/common/utils/exception.util';

@Injectable()
export class PostsService {
  constructor(
    private readonly usersService: UsersService,
    private readonly tagsService: TagsService,
    private readonly metaOptionsService: MetaOptionsService,
    private readonly paginationProvider: PaginationProvider,
    @InjectRepository(Post) private postsRepository: Repository<Post>,
  ) {}

  public async findAll(
    userId: number,
    postQuery: GetPostsDto,
  ): Promise<Paginated<Post>> {
    return this.paginationProvider.paginateQuery(
      postQuery,
      this.postsRepository,
    );
  }

  public async delete(id: number) {
    await this.postsRepository.delete(id);
    return { deleted: true, id };
  }

  public async create(data: CreatePostDto, userId: number) {
    const author = await handleDbError(() =>
      this.usersService.findOneById(userId),
    );
    const tags = await handleDbError(() =>
      this.tagsService.findMultipleTags(data.tags),
    );

    if (data.tags.length !== tags.length) {
      throw new BadRequestException('Check tag ids');
    }
    const post = this.postsRepository.create({
      ...data,
      author,
      tags,
    });
    return await handleDbError(() => this.postsRepository.save(post));
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
