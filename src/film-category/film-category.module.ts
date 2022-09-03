import { Module } from '@nestjs/common';
import { FilmCategoryController } from './film-category.controller';
import { FilmCategoryService } from './film-category.service';

@Module({
  controllers: [FilmCategoryController],
  providers: [FilmCategoryService]
})
export class FilmCategoryModule {}
