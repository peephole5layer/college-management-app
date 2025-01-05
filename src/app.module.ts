// filepath: src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollegesModule } from './colleges/colleges.module';
import { CollegePlacementModule } from './college-placement/college-placement.module';
import { CollegeWiseCourseModule } from './college-wise-course/college-wise-course.module';
import { CitiesModule } from './cities/cities.module';
import { StatesModule } from './states/states.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CollegesModule,
    CollegePlacementModule,
    CollegeWiseCourseModule,
    CitiesModule,
    StatesModule,
  ],
})
export class AppModule {}

