import { PartialType } from '@nestjs/swagger';
import { IsJSON, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { CreatePostMetaOptionsDto } from './createPostMetaOptions.dto';

export class UpdatePostMetaOptionsDto extends PartialType(CreatePostMetaOptionsDto) {}