import { Body, Controller, Post } from '@nestjs/common';
import { MetaOptionsService } from './providers/metaOptions.service';
import { CreatePostMetaOptionsDto } from './dto/createPostMetaOptions.dto'; 

@Controller('meta-options')
export class MetaOptionsController {
    constructor(private readonly metaOptionsService: MetaOptionsService) {}

    @Post()
    public async createMetaOption(@Body() metaOptionDto: CreatePostMetaOptionsDto) {
        return this.metaOptionsService.create(metaOptionDto);
    }

}
