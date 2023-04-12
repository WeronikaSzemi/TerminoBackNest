import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TermbaseService } from './termbase.service';
import { TermbaseDto } from './dto/termbase.dto';
import { AuthGuard } from '@nestjs/passport';
import { UserObj } from '../decorators/user-obj.decorator';
import { User } from '../user/entities/user.entity';

@Controller('/api/termbase')
export class TermbaseController {
  constructor(private readonly termbaseService: TermbaseService) {}

  @Post('/')
  @UseGuards(AuthGuard('jwt'))
  create(
    @Body() req: TermbaseDto,
    @UserObj() user: User
  ) {
    return this.termbaseService.create(req, user);
  }

  @Get('/')
  @UseGuards(AuthGuard('jwt'))
  findAll(
    @UserObj() user: User,
  ) {
    return this.termbaseService.findAll(user);
  }

  @Get('/:termbaseId')
  @UseGuards(AuthGuard('jwt'))
  findOne(
    @Param('termbaseId') termbaseId: string,
  ) {
    return this.termbaseService.findOne(termbaseId);
  }

  @Delete('/:termbaseId')
  @UseGuards(AuthGuard('jwt'))
  remove(
    @Param('termbaseId'
  ) termbaseId: string,
    @UserObj() user: User,
  ) {
    return this.termbaseService.remove(termbaseId, user);
  }
}
