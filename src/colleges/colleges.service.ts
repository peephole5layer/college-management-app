// filepath: src/colleges/colleges.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { College } from './entities/college.entity';

@Injectable()
export class CollegesService {
  constructor(
    @InjectRepository(College)
    private collegesRepository: Repository<College>,
  ) {}

  findAll(): Promise<College[]> {
    return this.collegesRepository.find({ relations: ['city', 'state'] });
  }

  findOne(id: number): Promise<College> {
    return this.collegesRepository.findOne({ where: { id }, relations: ['city', 'state'] });
  }

  // Additional methods for creating, updating, and deleting colleges
}