import { Body, Controller, Delete, Get, Inject, Param, Post, Query } from "@nestjs/common";
import { UserService } from './user.service';
import { RegisterDto } from './dto/register.dto';
import { RegisteredUserRes } from '../interfaces/user';

@Controller('/user')
export class UserController {
  constructor(@Inject(UserService) private userService: UserService) {}

  @Post('/')
  register(
    @Body() newUser: RegisterDto
  ): Promise<RegisteredUserRes> {
    return this.userService.register(newUser);
  }

  @Get('/:data')
  findOne(
    @Param('data') data: string,
    @Query('by') by: string,
  ) {
    return this.userService.findOne(data, by);
  }

  @Delete('/:userId')
  delete(
    @Param('userId') userId: string
  ): Promise<void> {
    return this.userService.delete(userId);
  }
}
