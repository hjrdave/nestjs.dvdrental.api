import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Store {
    @PrimaryGeneratedColumn({
        name: 'store_id',
        type: 'integer'
    })
    id: number;

    @Column({
        name: 'manager_staff_id',
        type: 'smallint',
        nullable: false
    })
    managerStaffId: number;

    @Column({
        name: 'address_id',
        type: 'smallint',
        nullable: false
    })
    addressId: number;

    @Column({
        name: 'last_update',
        type: 'timestamp',
        nullable: false
    })
    lastUpdate: string;

}