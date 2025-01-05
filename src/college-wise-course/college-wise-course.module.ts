import { Module } from '@nestjs/common';
import { CollegeWiseCourseService } from './college-wise-course.service';
import { CollegeWiseCourseController } from './college-wise-course.controller';

@Module({
  providers: [CollegeWiseCourseService],
  controllers: [CollegeWiseCourseController]
})
export class CollegeWiseCourseModule {}
