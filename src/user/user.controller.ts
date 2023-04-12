import { Body, Controller, Delete, Inject, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterDto } from './dto/register.dto';
import { RegisteredUserRes } from '../interfaces/user';

@Controller('/api/user')
export class UserController {
  constructor(@Inject(UserService) private userService: UserService) {}

  @Post('/')
  register(@Body() newUser: RegisterDto): Promise<RegisteredUserRes> {
    return this.userService.register(newUser);
  }

  @Delete('/:userId')
  delete(@Param('userId') userId: string): Promise<void> {
    return this.userService.delete(userId);
  }
}
