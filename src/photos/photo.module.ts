import { Photo } from './photo.entity';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Photo])],
  controllers: [],
  providers: [],
})
export class PhotoModule {}
