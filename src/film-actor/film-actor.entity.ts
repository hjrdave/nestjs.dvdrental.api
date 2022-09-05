import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FilmActor {
    @PrimaryGeneratedColumn({
        name: 'actor_id',
        type: 'smallint'
    })
    id: number;

    @Column({
        name: 'film_id',
        type: 'smallint',
        nullable: false
    })
    filmId: number;

    @Column({
        name: 'last_update',
        type: 'timestamp',
        nullable: false
    })
    lastUpdate: string;

}