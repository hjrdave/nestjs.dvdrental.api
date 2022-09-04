import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Address {
    @PrimaryGeneratedColumn({
        name: 'address_id',
        type: 'integer'
    })
    id: number;

    @Column({
        name: 'address',
        type: 'varchar',
        nullable: false
    })
    address: string;

    @Column({
        name: 'address2',
        type: 'varchar'
    })
    address2: string;

    @Column({
        name: 'district',
        type: 'varchar',
        nullable: false
    })
    district: string;

    @Column({
        name: 'city_id',
        type: 'smallint',
        nullable: false
    })
    cityId: string;

    @Column({
        name: 'postal_code',
        type: 'varchar'
    })
    postalCode: string;

    @Column({
        name: 'phone',
        type: 'varchar',
        nullable: false
    })
    phone: string;

    @Column({
        name: 'last_update',
        type: 'timestamp',
        nullable: false
    })
    lastUpdate: string;

}