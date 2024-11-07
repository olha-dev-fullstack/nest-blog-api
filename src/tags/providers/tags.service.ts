import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tag } from '../tag.schema';
import { CreateTagDto } from '../dto/create-tag.dto';

@Injectable()
export class TagsService {
  constructor(
    @InjectModel(Tag.name)
    private readonly tagsModel: Model<Tag>,
  ) {}

  public async createTag(createTagDto: CreateTagDto) {
    const newTag = new this.tagsModel(createTagDto);
    return await newTag.save();
  }
}
