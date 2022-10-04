import { Controller, Get, Param, ParseIntPipe, Body, Post, Delete, Patch } from '@nestjs/common';
import { StaffService } from './staff.service';
import { StaffDTO } from './staff.dto';

@Controller('staff')
export class StaffController {
    constructor(private readonly staffService: StaffService) { }

    @Get()
    getStaff() {
        return this.staffService.findStaff();
    }

    @Get('id/:id')
    getStaffById(@Param('id', ParseIntPipe) id: number) {
        return this.staffService.findStaffById(id);
    }

    @Post()
    postStaff(@Body() body: StaffDTO) {
        return this.staffService.createStaff(body);
    }

    @Delete('id/:id')
    deleteStaffById(@Param('id', ParseIntPipe) id: number) {
        return this.staffService.deleteStaffById(id);
    }

    @Patch('id/:id')
    patchStaffById(@Param('id', ParseIntPipe) id: number, @Body() body: StaffDTO) {
        return this.staffService.updateStaffById(id, body);
    }
}


