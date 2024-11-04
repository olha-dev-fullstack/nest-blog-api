import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dto/createPost.dto';
import { UpdatePostDto } from './dto/updatePost.dto';
import { GetPostsDto } from './dto/getPosts.dto';
import { ActiveUser } from 'src/auth/decorators/activeUser.decorator';
import { IActiveUser } from 'src/auth/interfaces/activeUser.interface';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('/:userId?')
  public async getPosts(
    @Param('userId') userId: number,
    @Query() postQuery: GetPostsDto,
  ) {
    return this.postsService.findAll(userId, postQuery);
  }

  @ApiOperation({
    summary: 'Create a new blog post',
  })
  @ApiResponse({
    status: 201,
    description: 'You get a 201 response if your post is created successfully',
  })
  @Post()
  public createPost(
    @Body() createPostDto: CreatePostDto,
    @ActiveUser() user: IActiveUser,
  ) {
    return this.postsService.create(createPostDto, user.sub);
  }

  @ApiOperation({
    summary: 'Updates an existing blog post in the database.',
  })
  @ApiResponse({
    status: 200,
    description:
      'You get a success 200 response if the post is updated successfully',
  })
  @Patch('/:id')
  public async updatePost(
    @Param('id') postId: number,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    return this.postsService.update(postId, updatePostDto);
  }

  @Delete('/:id')
  public async deletePost(@Param('id') id: string) {
    return this.postsService.delete(parseInt(id));
  }
}
