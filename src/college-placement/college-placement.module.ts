import { Module } from '@nestjs/common';
import { CollegePlacementService } from './college-placement.service';
import { CollegePlacementController } from './college-placement.controller';

@Module({
  providers: [CollegePlacementService],
  controllers: [CollegePlacementController]
})
export class CollegePlacementModule {}
