import { User } from '../user/entities/user.entity';

export interface TermbaseInterface {
  termbaseId?: string;
  termbaseName: string;
  user: User;
}
