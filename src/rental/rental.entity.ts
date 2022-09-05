import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Rental {
    @PrimaryGeneratedColumn({
        name: 'rental_id',
        type: 'integer'
    })
    id: number;

    @Column({
        name: 'rental_date',
        type: 'timestamp',
        nullable: false
    })
    rentalDate: string;

    @Column({
        name: 'inventory_id',
        type: 'integer',
        nullable: false
    })
    inventoryId: string;

    @Column({
        name: 'customer_id',
        type: 'smallint',
        nullable: false
    })
    customerId: string;

    @Column({
        name: 'return_date',
        type: 'timestamp'
    })
    returnDate: string;

    @Column({
        name: 'staff_id',
        type: 'smallint',
        nullable: false
    })
    staffId: string;

    @Column({
        name: 'last_update',
        type: 'timestamp',
        nullable: false
    })
    lastUpdate: string;

}