import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { RegisterDto } from './dto/register.dto';
import { RegisteredUserRes } from '../interfaces/user';
import { hashSync } from 'bcrypt';

@Injectable()
export class UserService {
  filter(user: User): RegisteredUserRes {
    const { userId, email } = user;
    return { userId, email };
  }

  async register(newUser: RegisterDto): Promise<RegisteredUserRes> {
    const user = new User();
    user.email = newUser.email;
    user.hash = hashSync(newUser.pwd, 10);

    await user.save();

    return this.filter(user);
  }

  async delete(userId: string): Promise<void> {
    await User.delete(userId);
  }
}
