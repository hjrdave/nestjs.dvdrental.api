import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserFoo } from './users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './users.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserFoo) private readonly userRepository: Repository<UserFoo>,
    ) { }

    findUsers(): Promise<UserFoo[]> {
        return this.userRepository.find();
    }

    createUser(createUserDto: CreateUserDto) {
        const newUser = this.userRepository.create(createUserDto);
        return this.userRepository.save(newUser);
    }

    findUsersById(id: number) {
        return this.userRepository.findOne({ where: { id: id } });
    }
}