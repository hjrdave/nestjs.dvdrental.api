import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PaginateQuery, Paginated, Paginate } from 'nestjs-paginate';
import { FilmActorService } from './film-actor.service';
import { FilmActor } from './film-actor.entity';

@Controller('film-actor')
export class FilmActorController {
    constructor(private readonly filmService: FilmActorService) { }

    @Get()
    getFilmActors() {
        return this.filmService.findFilmActors();
    }

    @Get('id/:id')
    findFilmActorById(@Param('id', ParseIntPipe) id: number) {
        return this.filmService.findFilmActorById(id);
    }
}
