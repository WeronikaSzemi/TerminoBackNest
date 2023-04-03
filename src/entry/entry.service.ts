import { Injectable } from '@nestjs/common';
import { CreateEntryDto } from './dto/create-entry.dto';
import { UpdateEntryDto } from './dto/update-entry.dto';
import { Termbase } from "../termbase/entities/termbase.entity";
import { Entry } from "./entities/entry.entity";

@Injectable()
export class EntryService {
  async create(req: CreateEntryDto, termbaseId: string) {

    const termbase: Termbase = await Termbase.findOneBy({
      termbaseId,
    });

    const entry = new Entry();
    entry.term = req.term;
    entry.termSource = req.termSource;
    entry.termDefinition = req.termDefinition;
    entry.termDefinitionSource = req.termDefinitionSource;
    entry.termCollocations = req.termCollocations;
    entry.equivalent = req.equivalent;
    entry.equivalentSource = req.equivalentSource;
    entry.equivalentDefinition = req.equivalentDefinition;
    entry.equivalentDefinitionSource = req.equivalentDefinitionSource;
    entry.equivalentCollocations = req.equivalentCollocations;
    entry.termbase = termbase;

    await entry.save();

    return entry;
  }

  async findAll(termbaseId: string): Promise<Entry[]> {
    return await Entry.find({
      where: {
        termbase: {
          termbaseId: termbaseId,
        },
      },
      order: {
        term: 'ASC',
      },
    });
  }

  async findOne(id: string) {
    return await Entry.findOneBy({
      id,
    });
  }

  async update(id: number, updateEntryDto: UpdateEntryDto) {
    return `This action updates a #${id} entry`;
  }

  async remove(id: number) {
    return `This action removes a #${id} entry`;
  }
}
