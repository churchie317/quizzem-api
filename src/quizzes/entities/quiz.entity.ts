import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Round } from '../../rounds/entities/round.entity';

@Entity('quizzes')
export class Quiz {
  @Index('quizzes_id_idx')
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ name: 'created_on' })
  createdOn: Date;

  @Column({ name: 'creator_id' })
  creatorId: string;

  @Column()
  name: string;

  @OneToMany(() => Round, (round) => round.quiz)
  rounds: Round[];
}
