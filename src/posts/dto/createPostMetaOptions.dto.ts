import { IsJSON, IsNotEmpty, IsString } from 'class-validator';

export class CreatePostMetaOptionsDto {
  @IsNotEmpty()
  @IsJSON()
  metaVAlue: string;
}
