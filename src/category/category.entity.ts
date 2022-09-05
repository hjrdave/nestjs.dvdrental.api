import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
    @PrimaryGeneratedColumn({
        name: 'category_id',
        type: 'integer'
    })
    id: number;

    @Column({
        name: 'name',
        type: 'varchar',
        nullable: false
    })
    name: string;

    @Column({
        name: 'last_update',
        type: 'timestamp',
        nullable: false
    })
    lastUpdate: string;
}