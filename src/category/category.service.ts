import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>,
    ) { };

    findCategory() {
        return this.categoryRepository.find();
    }

    findCategoryById(id: number) {
        return this.categoryRepository.findOne({ where: { id: id } })
    }
}
