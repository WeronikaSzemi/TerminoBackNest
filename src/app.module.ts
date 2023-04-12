import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from './user/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { TermbaseModule } from './termbase/termbase.module';
import { Termbase } from './termbase/entities/termbase.entity';
import { EntryModule } from './entry/entry.module';
import { Entry } from './entry/entities/entry.entity';
import { config } from '../config/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: config.dbHost,
      port: 3306,
      username: config.dbUser,
      password: config.dbPassword,
      database: config.dbDatabase,
      entities: [User, Termbase, Entry],
      bigNumberStrings: false,
      logging: true,
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    TermbaseModule,
    EntryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
