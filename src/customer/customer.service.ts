import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginateQuery, paginate, Paginated, FilterOperator } from 'nestjs-paginate';
import { Customer } from './customer.entity';
import { CustomerDTO } from './customer.dto';

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
                filterProps.firstName = [FilterOperator.EQ];
            };
            if (filters?.lastName?.length > 0 && filters?.lastName !== undefined) {
                filterProps.lastName = [FilterOperator.EQ];
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

    createCustomer(body: CustomerDTO) {
        const customer: Customer = new Customer();
        customer.storeId = body.storeId;
        customer.firstName = body.firstName;
        customer.lastName = body.lastName;
        customer.email = body.email;
        customer.addressId = body.addressId;
        customer.activeBool = true;
        customer.createDate = new Date();

        console.log('Created new customer:');
        console.log(`Store ID: ${customer.storeId}, First Name: ${customer.firstName}, Last Name: ${customer.lastName}, Email: ${customer.email}, Address ID: ${customer.addressId}, ActiveBool: ${customer.activeBool}, Create Date: ${customer.createDate}`);

        return this.customerRepository.save(customer);
    }

    async deleteCustomerById(id: number) {
        const customerToRemove = await this.customerRepository.findOneBy({ id: id });
        return this.customerRepository.remove(customerToRemove)
    }

    async updateCustomerById(id: number, body: CustomerDTO) {
        return this.customerRepository.update(id, body);
    }
}
