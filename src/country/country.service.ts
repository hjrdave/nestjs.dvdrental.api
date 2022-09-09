import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginateQuery, paginate, Paginated } from 'nestjs-paginate';
import { Country } from './country.entity';

@Injectable()
export class CountryService {
    constructor(
        @InjectRepository(Country)
        private readonly countryRepository: Repository<Country>,
    ) { };

    findCountry() {
        return this.countryRepository.find();
    }

    findCountryById(id: number) {
        return this.countryRepository.findOne({ where: { id: id } });
    }
}
