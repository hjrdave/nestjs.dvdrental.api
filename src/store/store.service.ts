import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Store } from './store.entity';

@Injectable()
export class StoreService {
    constructor(
        @InjectRepository(Store)
        private readonly storeRepository: Repository<Store>,
    ) { };

    findStore() {
        return this.storeRepository.find();
    }

    findStoreById(id: number) {
        return this.storeRepository.findOne({ where: { id: id } });
    }
}
