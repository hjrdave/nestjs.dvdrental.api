import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PaginateQuery, Paginated, Paginate } from 'nestjs-paginate';
import { CityService } from './city.service';
import { City } from './city.entity';

@Controller('city')
export class CityController {
    constructor(private readonly cityService: CityService) { }

    @Get()
    getCities(@Paginate() query: PaginateQuery): Promise<Paginated<City>> {
        return this.cityService.findCities(query);
    }

    @Get('id/:id')
    findUsersById(@Param('id', ParseIntPipe) id: number) {
        return this.cityService.findCityById(id);
    }
}
