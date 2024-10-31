import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';
import { CreatePostDto } from './createPost.dto';

export class UpdatePostDto extends PartialType(CreatePostDto) {}
