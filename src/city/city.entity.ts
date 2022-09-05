import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class City {
    @PrimaryGeneratedColumn({
        name: 'city_id',
        type: 'integer'
    })
    id: number;

    @Column({
        name: 'city',
        type: 'varchar',
        nullable: false
    })
    city: string;

    @Column({
        name: 'country_id',
        type: 'smallint',
        nullable: false
    })
    countryId: string;

    @Column({
        name: 'last_update',
        type: 'timestamp',
        nullable: false
    })
    lastUpdate: string;

}