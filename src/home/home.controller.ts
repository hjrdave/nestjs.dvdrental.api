import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class HomeController {
    @Get()
    @Render('index')
    root() {
        return {};
    }
}
