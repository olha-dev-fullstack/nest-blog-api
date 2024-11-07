import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dto/createPost.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from '../post.schema';
import { Model } from 'mongoose';

@Injectable()
export class PostsService {
  constructor(
    private readonly usersService: UsersService,
    @InjectModel(Post.name) private readonly postModel: Model<Post>,
  ) {}

  public async findAll() {
    return this.postModel.find().populate('tags').populate('author').exec();
  }

  public async createPost(createPostDto: CreatePostDto) {
    const newPost = new this.postModel(createPostDto);
    return newPost.save();
  }
}
