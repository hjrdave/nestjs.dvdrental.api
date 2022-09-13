import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PaginateQuery, Paginated, Paginate } from 'nestjs-paginate';
import { RentalService } from './rental.service';
import { Rental } from './rental.entity';

@Controller('rental')
export class RentalController {
    constructor(private readonly rentalService: RentalService) { }

    @Get()
    getRentals(@Paginate() query: PaginateQuery): Promise<Paginated<Rental>> {
        return this.rentalService.findRentals(query);
    }

    @Get('id/:id')
    findRentalById(@Param('id', ParseIntPipe) id: number) {
        return this.rentalService.findRentalById(id);
    }
}
