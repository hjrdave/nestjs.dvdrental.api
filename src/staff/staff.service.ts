import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Staff } from './staff.entity';
import { StaffDTO } from './staff.dto';

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

    createStaff(body: StaffDTO) {
        const staff: Staff = new Staff();
        staff.firstName = body.firstName;
        staff.lastName = body.lastName;
        staff.email = body.email;
        staff.username = body.username;
        staff.password = body.password;
        staff.storeId = body.storeId;
        staff.addressId = body.addressId;

        console.log('Created new staff member:');
        console.log(`First Name: ${staff.firstName}, Last Name: ${staff.lastName}, Email: ${staff.email}, Username: ${staff.username}, Password: ${staff.password}, StoreID: ${staff.storeId}, AddressID: ${staff.addressId}`);

        return this.staffRepository.save(staff);
    }

    async deleteStaffById(id: number) {
        const staffToRemove = await this.staffRepository.findOneBy({ id: id });
        return this.staffRepository.remove(staffToRemove)
    }

    async updateStaffById(id: number, body: StaffDTO) {

        return this.staffRepository.update(id, body);
    }
}

//example staff
// {
//     "firstName": "Kevin",
//         "lastName": "Foo",
//             "email": "kfoo@foo.com",
//                 "username": "kfoo",
//                     "password": "crazyFoo",
//                         "storeId": 2,
//                             "addressId": 2
// }
