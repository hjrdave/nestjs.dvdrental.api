import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Film {
    @PrimaryGeneratedColumn({
        name: 'film_id',
        type: 'integer'
    })
    id: number;

    @Column({
        name: 'title',
        type: 'varchar',
        nullable: false
    })
    title: string;

    @Column({
        name: 'description',
        type: 'text',
        nullable: true
    })
    description: string;

    @Column({
        name: 'release_year',
        type: 'text',
        nullable: true,
        default: '',
    })
    releaseYear: string;

    @Column({
        name: 'language_id',
        type: 'smallint',
        nullable: false
    })
    languageId: number;

    @Column({
        name: 'rental_duration',
        type: 'smallint',
        nullable: false
    })
    rentalDuration: number;

    @Column({
        name: 'rental_rate',
        type: 'numeric',
        nullable: false
    })
    rentalRate: number;

    @Column({
        name: 'length',
        type: 'smallint',
        nullable: false,
        default: '',
    })
    length: number;

    @Column({
        name: 'replacement_cost',
        type: 'numeric',
        nullable: true,
        default: '',
    })
    replacementCost: number;

    @Column({
        name: 'rating',
        type: 'text',
        nullable: true
    })
    rating: string;

    @Column({
        name: 'last_update',
        type: 'timestamp',
        nullable: false
    })
    lastUpdate: string;

    @Column({
        name: 'special_features',
        type: 'text',
        nullable: true,
        default: '',
    })
    specialFeatures: string[];

    @Column({
        name: 'fulltext',
        type: 'tsvector',
        nullable: false,
    })
    fullText: string;

}