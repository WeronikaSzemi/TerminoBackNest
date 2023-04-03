import { Injectable } from '@nestjs/common';
import { TermbaseDto } from './dto/termbase.dto';
import { User } from '../user/entities/user.entity';
import { Termbase } from './entities/termbase.entity';
import { EntityManager } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';

@Injectable()
export class TermbaseService {
  constructor(@InjectEntityManager() private entityManager: EntityManager) {}

  filter(termbase: Termbase) {
    const { termbaseId, termbaseName, user } = termbase;
    const { userId } = user;
    return { termbaseId, termbaseName, userId };
  }

  async create(req: TermbaseDto, user: User) {

    const found = await Termbase.findOneBy({
      user: {
        userId: user.userId,
      },
      termbaseName: req.termbaseName,
    });

    if (found) {
      return 'Słownik o tej nazwie już istnieje.';
    }

    const termbase = new Termbase();
    termbase.termbaseName = req.termbaseName;
    termbase.user = user;

    await termbase.save();

    return this.filter(termbase);
  }

  async findAll(user: User): Promise<Termbase[]> {
    return await Termbase.find({
      where: {
        user: {
          userId: user.userId,
        },
      },
      order: {
        termbaseName: 'ASC',
      },
    });
  }

  async findOne(termbaseId: string) {
    return await Termbase.findOneBy({
      termbaseId,
    });
  }

  async remove(termbaseId: string, user: User): Promise<void> {

    if (!termbaseId) {
      throw new Error('Nie wskazano słownika do usunięcia.');
    }

    const termbase = await Termbase.findOneBy({
      termbaseId,
    });

    if (!termbase) {
      throw new Error('Nie znaleziono takiego słownika.');
    }

    await termbase.remove();
  }
}
