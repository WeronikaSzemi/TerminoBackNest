import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { TermbaseInterface } from '../../interfaces/termbase';

@Entity()
export class Termbase extends BaseEntity implements TermbaseInterface {
  @PrimaryGeneratedColumn('uuid')
  termbaseId: string;

  @Column({
    length: 50,
  })
  termbaseName: string;

  @ManyToOne((type) => User, (user) => user.termbases, {
    onDelete: 'CASCADE',
  })
  user: User;
}
