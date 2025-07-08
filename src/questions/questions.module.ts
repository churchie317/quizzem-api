import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Question } from './entities/question.entity';
import { QuestionsController } from './questions.controller';
import { QuestionsService } from './questions.service';

@Module({
  controllers: [QuestionsController],
  imports: [TypeOrmModule.forFeature([Question])],
  providers: [QuestionsService],
})
export class QuestionsModule {}
