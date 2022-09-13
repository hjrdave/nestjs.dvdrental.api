import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { StoreService } from './store.service';

@Controller('store')
export class StoreController {
    constructor(private readonly storeService: StoreService) { }

    @Get()
    getStores() {
        return this.storeService.findStore();
    }

    @Get('id/:id')
    getStoreById(@Param('id', ParseIntPipe) id: number) {
        return this.storeService.findStoreById(id);
    }
}
