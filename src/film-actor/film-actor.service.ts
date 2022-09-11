import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Unique } from 'typeorm';
import { PaginateQuery, paginate, Paginated } from 'nestjs-paginate';
import { FilmActor } from './film-actor.entity';

@Injectable()
export class FilmActorService {
    constructor(
        @InjectRepository(FilmActor)
        private readonly filmActorRepository: Repository<FilmActor>,
    ) { };

    findFilmActors() {
        // return paginate(query, this.filmActorRepository, {
        //     sortableColumns: ['id'],
        //     defaultSortBy: [['id', 'ASC']],
        //     nullSort: 'last',
        //     defaultLimit: 50,
        //     maxLimit: 5462
        // });
        return this.filmActorRepository.find();
    }

    findFilmActorById(id: number) {
        return this.filmActorRepository.findOne({ where: { id: id } });
    }
}
