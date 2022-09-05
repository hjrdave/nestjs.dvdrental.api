import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Inventory {
    @PrimaryGeneratedColumn({
        name: 'inventory_id',
        type: 'integer'
    })
    id: number;

    @Column({
        name: 'film_id',
        type: 'smallint',
        nullable: false
    })
    filmId: number;

    @Column({
        name: 'store_id',
        type: 'smallint',
        nullable: false
    })
    storeId: number;

    @Column({
        name: 'last_update',
        type: 'timestamp',
        nullable: false
    })
    lastUpdate: string;

}