import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PaginateQuery, Paginated, Paginate } from 'nestjs-paginate';
import { AddressService } from './address.service';
import { Address } from './address.entity';

@Controller('address')
export class AddressController {
    constructor(private readonly addressService: AddressService) { }

    @Get()
    getAddresses(@Paginate(['address', 'district', 'zipcode', 'phone']) query: PaginateQuery): Promise<Paginated<Address>> {
        return this.addressService.findAddress(query);
    }

    @Get('id/:id')
    getAddressById(@Param('id', ParseIntPipe) id: number) {
        return this.addressService.findAddressById(id);
    }
}
