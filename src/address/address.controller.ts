import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PaginateQuery, Paginated, Paginate } from 'nestjs-paginate';
import { AddressService } from './address.service';
import { Address } from './address.entity';

@Controller('address')
export class AddressController {
    constructor(private readonly addressService: AddressService) { }

    @Get()
    getAddresses(@Paginate() query: PaginateQuery): Promise<Paginated<Address>> {
        return this.addressService.findAddress(query);
    }

    @Get('id/:id')
    findAddressById(@Param('id', ParseIntPipe) id: number) {
        return this.addressService.findAddressById(id);
    }
}
