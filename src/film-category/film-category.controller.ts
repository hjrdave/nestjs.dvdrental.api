import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { FilmCategoryService } from './film-category.service';

@Controller('film-category')
export class FilmCategoryController {
    constructor(private readonly filmCategoryService: FilmCategoryService) { }

    @Get()
    getFilmCategories() {
        return this.filmCategoryService.findFilmCategories();
    }

    @Get('id/:id')
    getFilmCategoryById(@Param('id', ParseIntPipe) id: number) {
        return this.filmCategoryService.findFilmCategoryById(id);
    }
}
