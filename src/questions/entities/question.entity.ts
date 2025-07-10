import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Answer } from '../../answers/entities/answer.entity';
import { Round } from '../../rounds/entities/round.entity';

@Entity('questions')
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Answer, (answer) => answer.question)
  answers: Answer[];

  @Column({ default: 1 })
  points: number;

  @JoinColumn({ name: 'round_id' })
  @ManyToOne(() => Round)
  round: Round;

  @Column()
  text: string;
}
