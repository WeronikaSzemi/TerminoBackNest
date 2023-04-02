import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserInterface } from '../interfaces/user';
import { Termbase } from '../termbase/entities/termbase.entity';

@Entity()
export class User extends BaseEntity implements UserInterface {
  @PrimaryGeneratedColumn('uuid')
  userId: string;

  @Column({
    length: 255,
  })
  email: string;

  @Column({
    length: 60,
  })
  hash: string;

  @Column({
    nullable: true,
    default: null,
  })
  currentTokenId: string | null;

  @OneToMany((type) => Termbase, (entity) => entity.user)
  termbases: Termbase[];
}
