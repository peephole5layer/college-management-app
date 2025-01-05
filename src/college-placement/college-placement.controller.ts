// filepath: src/college-placement/college-placement.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { CollegePlacementService } from './college-placement.service';
import { CollegePlacement } from '../colleges/entities/CollegePlacement.entity';

@Controller('college-placement')
export class CollegePlacementController {
  constructor(private readonly collegePlacementService: CollegePlacementService) {}

  @Get()
  findAll(): Promise<CollegePlacement[]> {
    return this.collegePlacementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<CollegePlacement> {
    return this.collegePlacementService.findOne(id);
  }

  // Additional endpoints for creating, updating, and deleting college placements
}