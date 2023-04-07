import { Injectable } from '@nestjs/common';
import { EntryDto } from './dto/entry.dto';
import { Termbase } from '../termbase/entities/termbase.entity';
import { Entry } from './entities/entry.entity';

@Injectable()
export class EntryService {

  async create(req: EntryDto, termbaseId: string): Promise<Entry> {

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

  async findAll(termbaseId: string, sort: string): Promise<Entry[]> {

    if (sort === 'createdAt') {
      return await Entry.find({
        where: {
          termbase: {
            termbaseId: termbaseId,
          },
        },
        order: {
          createdAt: 'DESC',
        },
      });
    } else if (sort === 'modifiedAt') {
      return await Entry.find({
        where: {
          termbase: {
            termbaseId: termbaseId,
          },
        },
        order: {
          modifiedAt: 'DESC',
        },
      });
    } else {
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
  }

  async findOne(id: string): Promise<Entry> {
    return await Entry.findOneBy({
      id,
    });
  }

  async update(id: string, req: EntryDto): Promise<Entry> {

    if (!id) {
      throw new Error('Brakuje ID hasła.');
    }

    const entry = await Entry.findOneBy({
      id,
    });

    if (!entry) {
      throw new Error('Nie odnaleziono hasła.');
    }

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
    entry.modifiedAt = new Date();
    await entry.save();
    return entry;
  }

  async remove(id: string): Promise<void> {
    const entry = await Entry.findOneBy({
      id,
    });
    await entry.remove();
  }
}
