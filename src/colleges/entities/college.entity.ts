// filepath: src/colleges/entities/college.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { City } from './city.entity'; // Ensure this path is correct and the file exists
import { State } from './State.entity';
import { CollegePlacement } from './CollegePlacement.entity';
import { OneToMany } from 'typeorm';

@Entity()
export class College {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  score: number;

  @ManyToOne(() => City, city => city.colleges)
  city: City;

  @ManyToOne(() => State, state => state.colleges)
  state: State;
@OneToMany(() => CollegePlacement, collegePlacement => collegePlacement.college)
placements: CollegePlacement[];
}
