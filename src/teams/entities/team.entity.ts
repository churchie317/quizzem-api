import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Answer } from '../../answers/entities/answer.entity';
import { Game } from '../../games/entities/game.entity';

@Entity('teams')
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Answer, (answer) => answer.team)
  answers: Answer[];

  @JoinColumn({ name: 'game_id' })
  @ManyToOne(() => Game)
  game: Game;

  @Column()
  name: string;
}
