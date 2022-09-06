import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PaginateQuery, Paginated, Paginate } from 'nestjs-paginate';
import { ActorService } from './actor.service';
import { Actor } from './actor.entity';

@Controller('actor')
export class ActorController { }
