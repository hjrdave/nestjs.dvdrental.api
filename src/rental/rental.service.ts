import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginateQuery, paginate, Paginated } from 'nestjs-paginate';
import { Rental } from './rental.entity';

@Injectable()
export class RentalService {
    constructor(
        @InjectRepository(Rental)
        private readonly rentalRepository: Repository<Rental>,
    ) { };

    findRentals(query: PaginateQuery): Promise<Paginated<Rental>> {
        return paginate(query, this.rentalRepository, {
            sortableColumns: ['id'],
            defaultSortBy: [['id', 'ASC']],
            nullSort: 'last',
            defaultLimit: 50,
            maxLimit: 16044
        });
    }

    findRentalById(id: number) {
        return this.rentalRepository.findOne({ where: { id: id } });
    }
}
