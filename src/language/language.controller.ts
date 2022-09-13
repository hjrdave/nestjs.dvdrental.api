import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { LanguageService } from './language.service';

@Controller('language')
export class LanguageController {
    constructor(private readonly languageService: LanguageService) { }

    @Get()
    getLanguage() {
        return this.languageService.findLanguage();
    }

    @Get('id/:id')
    findLanguageById(@Param('id', ParseIntPipe) id: number) {
        return this.languageService.findLanguageById(id);
    }
}
