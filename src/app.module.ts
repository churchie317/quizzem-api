import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersistenceModule } from './persistence/persistence.module';
import { QuestionsModule } from './questions/questions.module';

@Module({
  imports: [PersistenceModule, QuestionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
