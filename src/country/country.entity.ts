import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Country {
    @PrimaryGeneratedColumn({
        name: 'country_id',
        type: 'integer'
    })
    id: number;

    @Column({
        name: 'country',
        type: 'varchar',
        nullable: false
    })
    country: string;

    @Column({
        name: 'last_update',
        type: 'timestamp',
        nullable: false
    })
    lastUpdate: string;

}