import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginateQuery, paginate, Paginated } from 'nestjs-paginate';
import { Customer } from './customer.entity';

@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(Customer)
        private readonly customerRepository: Repository<Customer>,
    ) { };

    findCustomers(query: PaginateQuery): Promise<Paginated<Customer>> {
        return paginate(query, this.customerRepository, {
            sortableColumns: ['id'],
            defaultSortBy: [['id', 'ASC']],
            nullSort: 'last',
            defaultLimit: 50,
            maxLimit: 599
        });
    }

    findCustomerById(id: number) {
        return this.customerRepository.findOne({ where: { id: id } });
    }
}
