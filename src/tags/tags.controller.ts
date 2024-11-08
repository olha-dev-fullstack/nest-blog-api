import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { TagsService } from './providers/tags.service';
import { CreateTagDto } from './dto/createTag.dto';

@Controller('tags')
export class TagsController {
  constructor(private tagsService: TagsService) {}

  @Post()
  public async createTag(@Body() createTagDto: CreateTagDto) {
    return this.tagsService.create(createTagDto);
  }
  @Delete('/:id')
  public async deleteTag(@Param('id', ParseIntPipe) id: number) {
    return this.tagsService.delete(id);
  }

  @Delete('/soft-delete/:id')
  public async softDeleteTag(@Param('id', ParseIntPipe) id: number) {
    return this.tagsService.softDelete(id);
  }
}
