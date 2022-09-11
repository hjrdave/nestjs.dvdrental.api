import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmActorController } from './film-actor.controller';
import { FilmActorService } from './film-actor.service';
import { FilmActor } from './film-actor.entity';
@Module({
  imports: [TypeOrmModule.forFeature([FilmActor])],
  controllers: [FilmActorController],
  providers: [FilmActorService]
})
export class FilmActorModule { }
