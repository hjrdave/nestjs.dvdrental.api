/**
 * Film Service
 * 
 * Pagination Docs: https://www.npmjs.com/package/nestjs-paginate
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginateQuery, paginate, Paginated } from 'nestjs-paginate';
import { Film } from './film.entity';

@Injectable()
export class FilmService {
    constructor(
        @InjectRepository(Film)
        private readonly filmRepository: Repository<Film>,
    ) { };

    findFilms(query: PaginateQuery): Promise<Paginated<Film>> {
        return paginate(query, this.filmRepository, {
            sortableColumns: ['id'],
            defaultSortBy: [['id', 'ASC']],
            nullSort: 'last'
        });
    }

    findFilmById(id: number) {
        return this.filmRepository.findOne({ where: { id: id } });
    }

}
