import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FilmCategory {
    @PrimaryGeneratedColumn({
        name: 'film_id',
        type: 'integer'
    })
    id: number;

    @Column({
        name: 'category_id',
        type: 'smallint',
        nullable: false
    })
    categoryId: string;

    @Column({
        name: 'last_update',
        type: 'timestamp',
        nullable: false
    })
    lastUpdate: string;

}