import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from '../tag.entity';
import { In, Repository } from 'typeorm';
import { CreateTagDto } from '../dto/createTag.dto';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tag) private readonly tagRepository: Repository<Tag>,
  ) {}

  public async create(createTagDto: CreateTagDto) {
    const tag = this.tagRepository.create(createTagDto);
    return this.tagRepository.save(tag);
  }

  public async findMultipleTags(tags: number[]) {    
    const results = await this.tagRepository.find({
      where: {
        id: In(tags),
      },
    });    
    return results;
  }

  public async delete(id: number) {
    await this.tagRepository.delete(id);
    return { deleted: true, id };
  }

  public async softDelete(id: number) {
    await this.tagRepository.softDelete(id);
    return { deleted: true, id };
  }
}
