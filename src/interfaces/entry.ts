import { Termbase } from '../termbase/entities/termbase.entity';

export interface EntryInterface {
  id: string;
  createdAt: Date;
  modifiedAt: Date;
  term: string;
  termSource?: string;
  termDefinition?: string;
  termDefinitionSource?: string;
  termCollocations?: string;
  equivalent?: string;
  equivalentSource?: string;
  equivalentDefinition?: string;
  equivalentDefinitionSource?: string;
  equivalentCollocations?: string;
  termbase: Termbase;
}
