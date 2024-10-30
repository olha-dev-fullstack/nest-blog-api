import { Module } from '@nestjs/common';
import { MetaOptionsController } from './metaOptions.controller';
import { MetaOption } from './metaOption.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetaOptionsService } from './providers/metaOptions.service';

@Module({
  imports: [TypeOrmModule.forFeature([MetaOption])],
  controllers: [MetaOptionsController],
  providers: [MetaOptionsService]
})
export class MetaOptionsModule {}
