import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { College } from './college.entity';
@Entity()
export class City {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    state: string;

    @Column()
    country: string;

    @Column({ type: 'int', nullable: true })
    population: number;

    @OneToMany(() => College, college => college.city)
  colleges: College[];
}