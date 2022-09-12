import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { FilmCategoryService } from './film-category.service';

@Controller('film-category')
export class FilmCategoryController {
    constructor(private readonly filmCategoryService: FilmCategoryService) { }

    @Get()
    getFilmActors() {
        return this.filmCategoryService.findFilmCategories();
    }

    @Get('id/:id')
    findFilmActorById(@Param('id', ParseIntPipe) id: number) {
        return this.filmCategoryService.findFilmCategoryById(id);
    }
}
