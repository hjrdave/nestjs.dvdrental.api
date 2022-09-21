import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Actor } from './actor.entity';

@Injectable()
export class ActorService {
    constructor(
        @InjectRepository(Actor)
        private readonly actorRepository: Repository<Actor>,
    ) { };

    findActor(query: { firstname?: string; lastname?: string; }) {
        return this.actorRepository.find({ where: { firstName: query.firstname, lastName: query.lastname } });
    }

    findActorById(id: number) {
        return this.actorRepository.findOne({ where: { id: id } });
    }

}
