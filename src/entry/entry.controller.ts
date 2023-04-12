import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from "@nestjs/common";
import { EntryService } from './entry.service';
import { EntryDto } from './dto/entry.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('/api/:termbaseId/entry')
export class EntryController {
  constructor(private readonly entryService: EntryService) {}

  @Post('/')
  @UseGuards(AuthGuard('jwt'))
  create(
    @Param('termbaseId') termbaseId: string,
    @Body() req: EntryDto,
  ) {
    return this.entryService.create(req, termbaseId);
  }

  @Get('/')
  @UseGuards(AuthGuard('jwt'))
  findAll(
    @Param('termbaseId') termbaseId: string,
    @Query('sort') sort: string,
  ) {
    return this.entryService.findAll(termbaseId, sort);
  }

  @Get('/:id')
  @UseGuards(AuthGuard('jwt'))
  findOne(
    @Param('id') id: string,
  ) {
    return this.entryService.findOne(id);
  }

  @Patch('/:id')
  @UseGuards(AuthGuard('jwt'))
  update(
    @Param('id') id: string,
    @Body() req: EntryDto,
    ) {
    return this.entryService.update(id, req);
  }

  @Delete('/:id')
  @UseGuards(AuthGuard('jwt'))
  remove(
    @Param('id') id: string
  ) {
    return this.entryService.remove(id);
  }
}
