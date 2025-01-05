import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { College } from './College.entity';

@Entity()
export class CollegePlacement {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    companyName: string;

    @Column()
    jobTitle: string;

    @Column()
    salary: number;

    @Column()
    placementDate: Date;

    @ManyToOne(() => College, college => college.placements)
    college: College;
    highest_placement: number;
    average_placement: number;
    median_placement: number;
}