import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Language {
    @PrimaryGeneratedColumn({
        name: 'language_id',
        type: 'integer'
    })
    id: number;

    @Column({
        name: 'name',
        type: 'character',
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