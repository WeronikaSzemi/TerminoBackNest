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
    const termbase = new Termbase();
    termbase.termbaseName = req.termbaseName;
    termbase.user = user;

    await termbase.save();

    const sql = `CREATE TABLE \`${user.userId}_${termbase.termbaseName}\` (\`entryId\` VARCHAR(36) NOT NULL DEFAULT uuid(), \`term\` VARCHAR(50) NOT NULL, \`termSource\` VARCHAR(100) NULL, \`termDefinition\` VARCHAR(300) NULL, \`termDefinitionSource\` VARCHAR(100) NULL, \`termCollocations\` VARCHAR(300) NULL, \`equivalent\` VARCHAR(50) NOT NULL, \`equivalentSource\` VARCHAR(100) NULL, \`equivalentDefinition\` VARCHAR(300) NULL, \`equivalentDefinitionSource\` VARCHAR(100) NULL, \`equivalentCollocations\` VARCHAR(300) NULL, PRIMARY KEY (\`entryId\`)) COLLATE=utf8mb4_unicode_ci;`;

    await this.entityManager.query(sql);

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
    const termbase = await Termbase.findOneBy({
      termbaseId,
    });
    await termbase.remove();

    const sql = `DROP TABLE \`${user.userId}_${termbase.termbaseName}\``;

    await this.entityManager.query(sql);
  }
}
