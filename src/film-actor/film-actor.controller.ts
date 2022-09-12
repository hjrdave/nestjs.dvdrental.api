import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { FilmActorService } from './film-actor.service';

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
