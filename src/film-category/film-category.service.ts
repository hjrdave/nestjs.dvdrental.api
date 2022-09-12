import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FilmCategory } from './film-category.entity';

@Injectable()
export class FilmCategoryService {
    constructor(
        @InjectRepository(FilmCategory)
        private readonly filmCategoryRepository: Repository<FilmCategory>,
    ) { };

    findFilmCategories() {
        return this.filmCategoryRepository.find();
    }

    findFilmCategoryById(id: number) {
        return this.filmCategoryRepository.findOne({ where: { id: id } });
    }
}
