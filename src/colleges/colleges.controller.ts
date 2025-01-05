// filepath: src/colleges/colleges.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { CollegesService } from './colleges.service';
import { College } from './entities/college.entity';

@Controller('colleges')
export class CollegesController {
  constructor(private readonly collegesService: CollegesService) {}

  @Get()
  findAll(): Promise<College[]> {
    return this.collegesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<College> {
    return this.collegesService.findOne(id);
  }

  // Additional endpoints for creating, updating, and deleting colleges
}