import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FilmActor } from './film-actor.entity';

@Injectable()
export class FilmActorService {
    constructor(
        @InjectRepository(FilmActor)
        private readonly filmActorRepository: Repository<FilmActor>,
    ) { };

    findFilmActors() {
        return this.filmActorRepository.find();
    }

    findFilmActorById(id: number) {
        return this.filmActorRepository.findOne({ where: { id: id } });
    }
}
