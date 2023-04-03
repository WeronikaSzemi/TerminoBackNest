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

    try {
      const sql = `CREATE TABLE \`${user.userId}_${termbase.termbaseName}\` (\`entryId\` VARCHAR(36) NOT NULL DEFAULT uuid(), \`term\` VARCHAR(50) NOT NULL, \`termSource\` VARCHAR(100) NULL, \`termDefinition\` VARCHAR(300) NULL, \`termDefinitionSource\` VARCHAR(100) NULL, \`termCollocations\` VARCHAR(300) NULL, \`equivalent\` VARCHAR(50) NOT NULL, \`equivalentSource\` VARCHAR(100) NULL, \`equivalentDefinition\` VARCHAR(300) NULL, \`equivalentDefinitionSource\` VARCHAR(100) NULL, \`equivalentCollocations\` VARCHAR(300) NULL, PRIMARY KEY (\`entryId\`)) COLLATE=utf8mb4_unicode_ci;`;

      await this.entityManager.query(sql);

      try {
        await termbase.save();

      } catch (e) {
        throw new Error(e.message);
      }

    } catch (e) {
      throw new Error(e.message);
    }

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
    // @TODO: pobranie haseł
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

    try {
      const sql = `DROP TABLE \`${user.userId}_${termbase.termbaseName}\``;
      await this.entityManager.query(sql);
      try {
        await termbase.remove();
      } catch (e) {
        throw new Error(e.message);
      }
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
