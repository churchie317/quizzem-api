import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Question } from '../questions/entities/question.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      database: 'quizzem',
      entities: [Question],
      host: 'db',
      logger: 'advanced-console',
      maxQueryExecutionTime: 100,
      password: 'postgres',
      port: 5432,
      synchronize: false,
      type: 'postgres',
      username: 'postgres',
    }),
  ],
})
export class PersistenceModule {}
