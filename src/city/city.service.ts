import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginateQuery, paginate, Paginated, FilterOperator } from 'nestjs-paginate';
import { City } from './city.entity';

@Injectable()
export class CityService {
    constructor(
        @InjectRepository(City)
        private readonly cityRepository: Repository<City>,
    ) { };

    findCities(query: PaginateQuery): Promise<Paginated<City>> {

        //allows for filters to be an empty string or undefined.
        const createFilters = (filters: { city?: string }) => {
            let filterProps: any = {};
            if (filters?.city?.length > 0 && filters?.city !== undefined) {
                filterProps.city = [FilterOperator.EQ];
            };
            return filterProps;
        };
        return paginate(query, this.cityRepository, {
            sortableColumns: ['id'],
            defaultSortBy: [['id', 'ASC']],
            nullSort: 'last',
            searchableColumns: ['city'],
            defaultLimit: 50,
            maxLimit: 600,
            filterableColumns: createFilters(query.filter)
        });
    }

    findCityById(id: number) {
        return this.cityRepository.findOne({ where: { id: id } });
    }
}
