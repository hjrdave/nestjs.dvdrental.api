/**
 * Film Service
 * 
 * Pagination Docs: https://www.npmjs.com/package/nestjs-paginate
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginateQuery, paginate, Paginated, FilterOperator } from 'nestjs-paginate';
import { Film } from './film.entity';

@Injectable()
export class FilmService {
    constructor(
        @InjectRepository(Film)
        private readonly filmRepository: Repository<Film>,
    ) { };

    findFilms(query: PaginateQuery): Promise<Paginated<Film>> {

        //allows for filters to be an empty string or undefined.
        const createFilters = (filters: { title?: string; rating?: string }) => {
            let filterProps: any = {};
            if (filters?.title?.length > 0 && filters?.title !== undefined) {
                filterProps.title = [FilterOperator.EQ];
            };
            if (filters?.rating?.length > 0 && filters?.rating !== undefined) {
                filterProps.rating = [FilterOperator.EQ];
            };
            return filterProps;
        };
        return paginate(query, this.filmRepository, {
            sortableColumns: ['id'],
            defaultSortBy: [['id', 'ASC']],
            searchableColumns: ['title'],
            nullSort: 'last',
            defaultLimit: 50,
            maxLimit: 1000,
            filterableColumns: createFilters(query.filter)
        });
    }

    findFilmById(id: number) {
        return this.filmRepository.findOne({ where: { id: id } });
    }


}
