import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Question } from '../../questions/entities/question.entity';
import { Quiz } from '../../quizzes/entities/quiz.entity';

@Entity('rounds')
export class Round {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Question, (question) => question.round, {})
  questions: Question[];

  @JoinColumn({ name: 'quiz_id' })
  @ManyToOne(() => Quiz)
  quiz: Quiz;

  @Column()
  name: string;
}
