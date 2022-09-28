import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FilmActor } from './film-actor.entity';
import { PaginateQuery, paginate, Paginated, FilterOperator } from 'nestjs-paginate';

@Injectable()
export class FilmActorService {
    constructor(
        @InjectRepository(FilmActor)
        private readonly filmActorRepository: Repository<FilmActor>,
    ) { };

    findFilmActors(query: PaginateQuery): Promise<Paginated<FilmActor>> {
        return paginate(query, this.filmActorRepository, {
            sortableColumns: ['id'],
            defaultSortBy: [['id', 'ASC']],
            nullSort: 'last',
            defaultLimit: 50,
            maxLimit: 5462,
        });
    }

    findFilmActorById(id: number) {
        return this.filmActorRepository.findOne({ where: { id: id } });
    }
}
