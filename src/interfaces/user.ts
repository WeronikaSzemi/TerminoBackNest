import { Termbase } from '../termbase/entities/termbase.entity';

export interface UserInterface {
  email: string;
  hash: string;
  currentTokenId: string | null;
  termbases: Termbase[];
}

export interface RegisteredUserRes {
  userId: string;
  email: string;
}
