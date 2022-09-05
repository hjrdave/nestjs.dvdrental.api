import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Staff {
    @PrimaryGeneratedColumn({
        name: 'staff_id',
        type: 'integer'
    })
    id: number;

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
        name: 'address_id',
        type: 'smallint',
        nullable: false
    })
    addressId: string;

    @Column({
        name: 'email',
        type: 'varchar',
        nullable: false
    })
    email: string;

    @Column({
        name: 'store_id',
        type: 'smallint',
        nullable: false
    })
    storeId: number;

    @Column({
        name: 'active',
        type: 'boolean',
        nullable: false
    })
    active: boolean;

    @Column({
        name: 'username',
        type: 'varchar',
        nullable: false
    })
    username: string;

    @Column({
        name: 'password',
        type: 'varchar',
        nullable: false
    })
    password: string;

    @Column({
        name: 'last_update',
        type: 'timestamp',
        nullable: false
    })
    lastUpdate: string;

    @Column({
        name: 'picture',
        type: 'bytea',
        nullable: false
    })
    picture: number;

}