import { Module } from '@nestjs/common';
import { MetaOptionsController } from './metaOptions.controller';
import { MetaOption } from './metaOption.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MetaOption])],
  controllers: [MetaOptionsController]
})
export class MetaOptionsModule {}
