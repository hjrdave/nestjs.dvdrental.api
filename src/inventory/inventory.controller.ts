import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PaginateQuery, Paginated, Paginate } from 'nestjs-paginate';
import { InventoryService } from './inventory.service';
import { Inventory } from './inventory.entity';

@Controller('inventory')
export class InventoryController {
    constructor(private readonly inventoryService: InventoryService) { }

    @Get()
    findInventory(@Paginate() query: PaginateQuery): Promise<Paginated<Inventory>> {
        return this.inventoryService.findInventory(query);
    }

    @Get('id/:id')
    getInventoryById(@Param('id', ParseIntPipe) id: number) {
        return this.inventoryService.findInventoryById(id);
    }
}
