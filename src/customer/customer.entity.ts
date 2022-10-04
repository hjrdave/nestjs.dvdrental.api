import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {
    @PrimaryGeneratedColumn({
        name: 'customer_id',
        type: 'integer'
    })
    id: number;

    @Column({
        name: 'store_id',
        type: 'smallint',
        nullable: false
    })
    storeId: number;

    @Column({
        name: 'first_name',
        type: 'varchar',
        nullable: false
    })
    firstName: string;

    @Column({
        name: 'last_name',
        type: 'varchar',
        nullable: false
    })
    lastName: string;

    @Column({
        name: 'email',
        type: 'varchar'
    })
    email: string;

    @Column({
        name: 'address_id',
        type: 'smallint',
        nullable: false
    })
    addressId: number;

    @Column({
        name: 'activebool',
        type: 'boolean',
        nullable: false
    })
    activeBool: boolean;

    @Column({
        name: 'create_date',
        type: 'date',
        nullable: false
    })
    createDate: Date;

    @Column({
        name: 'last_update',
        type: 'timestamp'
    })
    lastUpdate: string;

    @Column({
        name: 'active',
        type: 'integer'
    })
    active: number;

}