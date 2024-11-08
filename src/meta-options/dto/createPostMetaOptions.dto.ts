import { ApiProperty } from '@nestjs/swagger';
import { IsJSON, IsNotEmpty } from 'class-validator';

export class CreatePostMetaOptionsDto {
  @ApiProperty({
    description: 'Meta value object for post',
    example: '{ "sidebarEnabled": true, "footerActive": true }',
  })
  @IsNotEmpty()
  @IsJSON()
  metaValue: string;
}
