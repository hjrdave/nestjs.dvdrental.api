import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserFoo } from './users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserFoo])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule { }
