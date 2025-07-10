import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Quiz } from '../../quizzes/entities/quiz.entity';
import { Round } from '../../rounds/entities/round.entity';
import { Team } from '../../teams/entities/team.entity';

const getRandomCharacter = (): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const randomCharacter = Math.floor(Math.random() * characters.length);
  return characters.charAt(randomCharacter);
};

const makeCode = (length: number): string =>
  Array(length).fill(null).map(getRandomCharacter).join('');

@Entity('games')
export class Game {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  @Index('games_code_idx')
  code: string;

  @CreateDateColumn({ name: 'created_on' })
  createdOn: Date;

  @JoinColumn({ name: 'current_round_id' })
  @ManyToOne(() => Round, { nullable: true })
  currentRound?: Round;

  @Column({ name: 'current_round_id', nullable: true })
  currentRoundId?: number | null;

  @Column({ default: false, name: 'is_complete' })
  isComplete: boolean;

  @Column()
  name: string;

  @JoinColumn({ name: 'previous_round_id' })
  @ManyToOne(() => Round, { nullable: true })
  previousRound?: Round;

  @Column({ name: 'previous_round_id', nullable: true })
  previousRoundId?: number | null;

  @JoinColumn({ name: 'quiz_id' })
  @ManyToOne(() => Quiz)
  quiz: Quiz;

  @OneToMany(() => Team, (team) => team.game)
  teams: Team[];

  @BeforeInsert()
  createCode(): void {
    this.code = makeCode(6);
  }
}
