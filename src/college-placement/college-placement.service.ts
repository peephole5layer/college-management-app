// filepath: src/college-placement/college-placement.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CollegePlacement } from '../colleges/entities/CollegePlacement.entity';

@Injectable()
export class CollegePlacementService {
  findOne(id: number): Promise<CollegePlacement> {
      throw new Error('Method not implemented.');
  }
  findAll(): Promise<CollegePlacement[]> {
      throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(CollegePlacement)
    private collegePlacementRepository: Repository<CollegePlacement>,
  ) {}

  async getCollegeData(collegeId: number) {
    const placements = await this.collegePlacementRepository.find({ where: { college: { id: collegeId } } });

    const avgSection = placements.reduce((acc, placement) => {
      acc.highest_placement += placement.highest_placement;
      acc.average_placement += placement.average_placement;
      acc.median_placement += placement.median_placement;
      acc.placementDates.push(placement.placementDate);
      return acc;
    }, { highest_placement: 0, average_placement: 0, median_placement: 0, placementDates: [] as Date[] });

    const placementSection = placements.map((placement, index, arr) => {
      const previousPlacement = arr[index - 1];
      const placementTrend = previousPlacement && placement.placementDate > previousPlacement.placementDate ? 'UP' : 'DOWN';
      return { ...placement, placementTrend };
    });

    return { avgSection, placementSection };
  }
}