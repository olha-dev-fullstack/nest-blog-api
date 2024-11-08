import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from '../metaOption.entity';
import { Repository } from 'typeorm';
import { CreatePostMetaOptionsDto } from '../dto/createPostMetaOptions.dto';
import { UpdatePostMetaOptionsDto } from '../dto/updatePostMetaOptions.dto';

@Injectable()
export class MetaOptionsService {
  constructor(
    @InjectRepository(MetaOption)
    private readonly metaOptionsRepository: Repository<MetaOption>,
  ) {}

  public async create(metaOptionDto: CreatePostMetaOptionsDto) {
    const metaOption = await this.metaOptionsRepository.create(metaOptionDto);
    return this.metaOptionsRepository.save(metaOption);
  }

  public async update(
    metaOtionId: number,
    updateMetaOptionDto: UpdatePostMetaOptionsDto,
  ) {
    const metaOption = await this.metaOptionsRepository.findOneBy({
      id: metaOtionId,
    });
    metaOption.metaValue = updateMetaOptionDto.metaValue;
    return this.metaOptionsRepository.save(metaOption);
  }
}
