import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { StaffService } from './staff.service';

@Controller('staff')
export class StaffController {
    constructor(private readonly staffService: StaffService) { }

    @Get()
    getStaff() {
        return this.staffService.findStaff();
    }

    @Get('id/:id')
    findStaffById(@Param('id', ParseIntPipe) id: number) {
        return this.staffService.findStaffById(id);
    }
}
