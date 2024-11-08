import { PartialType } from '@nestjs/swagger';
import { CreatePostMetaOptionsDto } from './createPostMetaOptions.dto';

export class UpdatePostMetaOptionsDto extends PartialType(
  CreatePostMetaOptionsDto,
) {}
