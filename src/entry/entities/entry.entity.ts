import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EntryInterface } from '../../interfaces/entry';
import { Termbase } from '../../termbase/entities/termbase.entity';

@Entity()
export class Entry extends BaseEntity implements EntryInterface {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
  })
  modifiedAt: Date;

  @Column({
    length: 50,
  })
  term: string;

  @Column({
    length: 100,
  })
  termSource?: string;

  @Column({
    length: 300,
  })
  termDefinition?: string;

  @Column({
    length: 100,
  })
  termDefinitionSource?: string;

  @Column({
    length: 300,
  })
  termCollocations?: string;

  @Column({
    length: 50,
  })
  equivalent: string;

  @Column({
    length: 100,
  })
  equivalentSource?: string;

  @Column({
    length: 300,
  })
  equivalentDefinition?: string;

  @Column({
    length: 100,
  })
  equivalentDefinitionSource?: string;

  @Column({
    length: 300,
  })
  equivalentCollocations?: string;

  @ManyToOne(type => Termbase, termbase => termbase.entries, {
    onDelete: 'CASCADE',
  })
  termbase: Termbase;
}
