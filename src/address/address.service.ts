import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginateQuery, paginate, Paginated, FilterOperator } from 'nestjs-paginate';
import { Address } from './address.entity';

@Injectable()
export class AddressService {
    constructor(
        @InjectRepository(Address)
        private readonly addressRepository: Repository<Address>,
    ) { };

    findAddress(query: PaginateQuery): Promise<Paginated<Address>> {
        //allows for filters to be an empty string or undefined.
        const createFilters = (filters: { address?: string; district?: string, zipcode?: string; phone: string }) => {
            let filterProps: any = {};
            if (filters?.address?.length > 0 && filters?.address !== undefined) {
                filterProps.address = [FilterOperator.EQ];
            };
            if (filters?.district?.length > 0 && filters?.district !== undefined) {
                filterProps.district = [FilterOperator.EQ];
            };
            if (filters?.zipcode?.length > 0 && filters?.zipcode !== undefined) {
                filterProps.zipcode = [FilterOperator.EQ];
            };
            if (filters?.phone?.length > 0 && filters?.phone !== undefined) {
                filterProps.phone = [FilterOperator.EQ];
            };
            return filterProps;
        };
        return paginate(query, this.addressRepository, {
            sortableColumns: ['id'],
            defaultSortBy: [['id', 'ASC']],
            nullSort: 'last',
            defaultLimit: 50,
            maxLimit: 1000,
            filterableColumns: createFilters(query.filter as any)
        });
    }

    findAddressById(id: number) {
        return this.addressRepository.findOne({ where: { id: id } });
    }
}
