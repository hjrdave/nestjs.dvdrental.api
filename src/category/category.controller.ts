import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) { }

    @Get()
    getCategory() {
        return this.categoryService.findCategory();
    }

    @Get('id/:id')
    findCategoryById(@Param('id', ParseIntPipe) id: number) {
        return this.categoryService.findCategoryById(id);
    }
}
