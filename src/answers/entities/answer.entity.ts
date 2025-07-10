import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Question } from '../../questions/entities/question.entity';
import { Team } from '../../teams/entities/team.entity';

@Entity('answers')
export class Answer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false, name: 'is_correct' })
  isCorrect: boolean;

  @JoinColumn({ name: 'question_id' })
  @ManyToOne(() => Question)
  question: Question;

  @Column({ name: 'question_id' })
  questionId: number;

  @JoinColumn({ name: 'team_id' })
  @ManyToOne(() => Team)
  team: Team;

  @Column({ name: 'team_id' })
  teamId: string;

  @Column()
  text: string;
}
