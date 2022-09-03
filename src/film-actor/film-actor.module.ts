import { Module } from '@nestjs/common';
import { FilmActorController } from './film-actor.controller';
import { FilmActorService } from './film-actor.service';

@Module({
  controllers: [FilmActorController],
  providers: [FilmActorService]
})
export class FilmActorModule {}
