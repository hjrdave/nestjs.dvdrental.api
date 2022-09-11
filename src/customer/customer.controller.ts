import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PaginateQuery, Paginated, Paginate } from 'nestjs-paginate';
import { CustomerService } from './customer.service';
import { Customer } from './customer.entity';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) { }

    @Get()
    getCustomers(@Paginate() query: PaginateQuery): Promise<Paginated<Customer>> {
        return this.customerService.findCustomers(query);
    }

    @Get('id/:id')
    findCustomerById(@Param('id', ParseIntPipe) id: number) {
        return this.customerService.findCustomerById(id);
    }
}
