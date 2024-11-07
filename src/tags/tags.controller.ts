import { TagsService } from './providers/tags.service';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto'; 

@Controller('tags')


@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}
  @Post()
  public createTag(@Body() createTagDto: CreateTagDto) {
    return this.tagsService.createTag(createTagDto);
  }
}
