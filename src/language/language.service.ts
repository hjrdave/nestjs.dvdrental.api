import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Language } from './language.entity';

@Injectable()
export class LanguageService {
    constructor(
        @InjectRepository(Language)
        private readonly languageRepository: Repository<Language>,
    ) { };

    findLanguage() {
        return this.languageRepository.find();
    }

    findLanguageById(id: number) {
        return this.languageRepository.findOne({ where: { id: id } })
    }
}
