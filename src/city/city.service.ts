import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginateQuery, paginate, Paginated } from 'nestjs-paginate';
import { City } from './city.entity';

@Injectable()
export class CityService {
    constructor(
        @InjectRepository(City)
        private readonly cityRepository: Repository<City>,
    ) { };

    findCities(query: PaginateQuery): Promise<Paginated<City>> {
        return paginate(query, this.cityRepository, {
            sortableColumns: ['id'],
            defaultSortBy: [['id', 'ASC']],
            nullSort: 'last',
            defaultLimit: 50,
            maxLimit: 600
        });
    }

    findCityById(id: number) {
        return this.cityRepository.findOne({ where: { id: id } });
    }
}
