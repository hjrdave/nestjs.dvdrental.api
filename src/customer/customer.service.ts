import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginateQuery, paginate, Paginated, FilterOperator } from 'nestjs-paginate';
import { Customer } from './customer.entity';

@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(Customer)
        private readonly customerRepository: Repository<Customer>,
    ) { };

    findCustomers(query: PaginateQuery): Promise<Paginated<Customer>> {
        console.log(query.filter);
        //allows for filters to be an empty string or undefined.
        const createFilters = (filters: { firstName?: string; lastName?: string; email?: string }) => {
            let filterProps: any = {};
            if (filters?.firstName?.length > 0 && filters?.firstName !== undefined) {
                filterProps.firstname = [FilterOperator.EQ];
            };
            if (filters?.lastName?.length > 0 && filters?.lastName !== undefined) {
                filterProps.lastname = [FilterOperator.EQ];
            };
            if (filters?.email?.length > 0 && filters?.email !== undefined) {
                filterProps.email = [FilterOperator.EQ];
            };
            return filterProps;
        };

        return paginate(query, this.customerRepository, {
            sortableColumns: ['id'],
            defaultSortBy: [['id', 'ASC']],
            searchableColumns: ['firstName', 'lastName', 'email'],
            nullSort: 'last',
            defaultLimit: 50,
            maxLimit: 599,
            filterableColumns: createFilters(query.filter)
        });
    }

    findCustomerById(id: number) {
        return this.customerRepository.findOne({ where: { id: id } });
    }
}
