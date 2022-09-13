import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginateQuery, paginate, Paginated } from 'nestjs-paginate';
import { Inventory } from './inventory.entity';

@Injectable()
export class InventoryService {
    constructor(
        @InjectRepository(Inventory)
        private readonly inventoryRepository: Repository<Inventory>,
    ) { };

    findInventory(query: PaginateQuery): Promise<Paginated<Inventory>> {
        return paginate(query, this.inventoryRepository, {
            sortableColumns: ['id'],
            defaultSortBy: [['id', 'ASC']],
            nullSort: 'last',
            defaultLimit: 50,
            maxLimit: 4581
        });
    }

    findInventoryById(id: number) {
        return this.inventoryRepository.findOne({ where: { id: id } });
    }
}
