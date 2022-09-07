import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ActorService } from './actor.service';

@Controller('actor')
export class ActorController {
    constructor(private readonly actorService: ActorService) { }

    @Get()
    getFilms() {
        return this.actorService.findActor();
    }

    @Get('id/:id')
    findActorById(@Param('id', ParseIntPipe) id: number) {
        return this.actorService.findActorById(id);
    }

}
