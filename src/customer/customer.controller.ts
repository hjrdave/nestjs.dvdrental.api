import { Controller, Get, Param, ParseIntPipe, Body, Post, Delete, Patch } from '@nestjs/common';
import { PaginateQuery, Paginated, Paginate } from 'nestjs-paginate';
import { CustomerService } from './customer.service';
import { Customer } from './customer.entity';
import { CustomerDTO } from './customer.dto';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) { }

    @Get()
    getCustomers(@Paginate(['firstName', 'lastName', 'email']) query: PaginateQuery): Promise<Paginated<Customer>> {
        return this.customerService.findCustomers(query);
    }

    @Get('id/:id')
    getCustomerById(@Param('id', ParseIntPipe) id: number) {
        return this.customerService.findCustomerById(id);
    }

    @Post()
    postCustomer(@Body() body: CustomerDTO) {
        return this.customerService.createCustomer(body);
    }

    @Delete('id/:id')
    deleteCustomerById(@Param('id', ParseIntPipe) id: number) {
        return this.customerService.deleteCustomerById(id);
    }

    @Patch('id/:id')
    patchCustomerById(@Param('id', ParseIntPipe) id: number, @Body() body: CustomerDTO) {
        return this.customerService.updateCustomerById(id, body);
    }
}
