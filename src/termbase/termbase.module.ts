import { Module } from '@nestjs/common';
import { TermbaseService } from './termbase.service';
import { TermbaseController } from './termbase.controller';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  controllers: [TermbaseController],
  providers: [TermbaseService],
})
export class TermbaseModule {}
