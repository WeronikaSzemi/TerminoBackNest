import { IsString } from 'class-validator';

export class TermbaseDto {
  @IsString()
  termbaseName: string;
}
