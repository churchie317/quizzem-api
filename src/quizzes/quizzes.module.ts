import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Quiz } from './entities/quiz.entity';
import { QuizzesController } from './quizzes.controller';
import { QuizzesService } from './quizzes.service';

@Module({
  controllers: [QuizzesController],
  exports: [TypeOrmModule],
  imports: [TypeOrmModule.forFeature([Quiz])],
  providers: [QuizzesService],
})
export class QuizzesModule {}
