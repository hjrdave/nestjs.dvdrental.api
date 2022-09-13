import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PaginateQuery, Paginated, Paginate } from 'nestjs-paginate';
import { CountryService } from './country.service';
import { Country } from './country.entity';

@Controller('country')
export class CountryController {
    constructor(private readonly countryService: CountryService) { }

    @Get()
    getCountry() {
        return this.countryService.findCountry();
    }

    @Get('id/:id')
    getCountryById(@Param('id', ParseIntPipe) id: number) {
        return this.countryService.findCountryById(id);
    }
}
