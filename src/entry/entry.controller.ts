import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from "@nestjs/common";
import { EntryService } from './entry.service';
import { CreateEntryDto } from './dto/create-entry.dto';
import { UpdateEntryDto } from './dto/update-entry.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller(':termbaseId/entry')
export class EntryController {
  constructor(private readonly entryService: EntryService) {}

  @Post('/')
  @UseGuards(AuthGuard('jwt'))
  create(
    @Param('termbaseId') termbaseId: string,
    @Body() req: CreateEntryDto,
  ) {
    return this.entryService.create(req, termbaseId);
  }

  @Get('/')
  @UseGuards(AuthGuard('jwt'))
  findAll(
    @Param('termbaseId') termbaseId: string,
  ) {
    return this.entryService.findAll(termbaseId);
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
  update(@Param('id') id: string, @Body() updateEntryDto: UpdateEntryDto) {
    return this.entryService.update(+id, updateEntryDto);
  }

  @Delete('/:id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.entryService.remove(+id);
  }
}
