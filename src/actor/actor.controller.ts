import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { ActorService } from './actor.service';

@Controller('actor')
export class ActorController {
    constructor(private readonly actorService: ActorService) { }

    @Get()
    getActors(@Query() query: { firstname?: string; lastname?: string; }) {
        return this.actorService.findActor(query);
    }

    @Get('id/:id')
    getActorById(@Param('id', ParseIntPipe) id: number) {
        return this.actorService.findActorById(id);
    }

}
