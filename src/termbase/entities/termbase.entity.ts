import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne, OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { User } from '../../user/entities/user.entity';
import { TermbaseInterface } from '../../interfaces/termbase';
import { Entry } from "../../entry/entities/entry.entity";

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

  @OneToMany(type => Entry, entry => entry.termbase)
  entries: Entry[];
}
