import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmCategoryController } from './film-category.controller';
import { FilmCategoryService } from './film-category.service';
import { FilmCategory } from './film-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FilmCategory])],
  controllers: [FilmCategoryController],
  providers: [FilmCategoryService]
})
export class FilmCategoryModule { }
