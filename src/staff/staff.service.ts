import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Staff } from './staff.entity';

@Injectable()
export class StaffService {
    constructor(
        @InjectRepository(Staff)
        private readonly staffRepository: Repository<Staff>,
    ) { };

    findStaff() {
        return this.staffRepository.find();
    }

    findStaffById(id: number) {
        return this.staffRepository.findOne({ where: { id: id } })
    }
}
