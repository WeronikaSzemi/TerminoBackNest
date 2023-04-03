import { BaseEntity } from 'typeorm';
import { IsNotEmpty, IsString, Length, MaxLength } from "class-validator";

export class CreateEntryDto extends BaseEntity {

  @IsString()
  @IsNotEmpty()
  @Length(3, 50)
  term: string;

  @IsString()
  @MaxLength(100)
  termSource?: string;

  @IsString()
  @MaxLength(300)
  termDefinition?: string;

  @IsString()
  @MaxLength(100)
  termDefinitionSource?: string;

  @IsString()
  @MaxLength(300)
  termCollocations?: string;

  @IsString()
  @IsNotEmpty()
  @Length(3, 50)
  equivalent: string;

  @IsString()
  @MaxLength(100)
  equivalentSource?: string;

  @IsString()
  @MaxLength(300)
  equivalentDefinition?: string;

  @IsString()
  @MaxLength(100)
  equivalentDefinitionSource?: string;

  @IsString()
  @MaxLength(300)
  equivalentCollocations?: string;
  //
  // @IsString()
  // @IsNotEmpty()
  // termbase: string;
}
