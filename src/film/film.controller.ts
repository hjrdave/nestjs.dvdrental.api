import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PaginateQuery, Paginated, Paginate } from 'nestjs-paginate';
import { FilmService } from './film.service';
import { Film } from './film.entity';

@Controller('film')
export class FilmController {
    constructor(private readonly filmService: FilmService) { }

    @Get()
    getFilms(@Paginate() query: PaginateQuery): Promise<Paginated<Film>> {
        return this.filmService.findFilms(query);
    }

    @Get('id/:id')
    findUsersById(@Param('id', ParseIntPipe) id: number) {
        return this.filmService.findFilmById(id);
    }
}
