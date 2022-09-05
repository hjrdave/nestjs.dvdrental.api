import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Payment {
    @PrimaryGeneratedColumn({
        name: 'payment_id',
        type: 'integer'
    })
    id: number;

    @Column({
        name: 'customer_id',
        type: 'smallint',
        nullable: false
    })
    customerId: number;

    @Column({
        name: 'staff_id',
        type: 'smallint',
        nullable: false
    })
    staffId: number;

    @Column({
        name: 'rental_id',
        type: 'integer',
        nullable: false
    })
    rentalId: number;

    @Column({
        name: 'amount',
        type: 'numeric',
        nullable: false
    })
    amount: number;

    @Column({
        name: 'payment_date',
        type: 'timestamp',
        nullable: false
    })
    paymentDate: string;

}