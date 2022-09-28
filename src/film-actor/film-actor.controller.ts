import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PaginateQuery, Paginated, Paginate } from 'nestjs-paginate';
import { FilmActor } from './film-actor.entity';
import { FilmActorService } from './film-actor.service';

@Controller('film-actor')
export class FilmActorController {
    constructor(private readonly filmService: FilmActorService) { }

    @Get()
    getFilmActors(@Paginate() query: PaginateQuery): Promise<Paginated<FilmActor>> {
        return this.filmService.findFilmActors(query);
    }

    @Get('id/:id')
    getFilmActorById(@Param('id', ParseIntPipe) id: number) {
        return this.filmService.findFilmActorById(id);
    }
}
