import { IsNotEmpty, IsString, Length, MaxLength, MinLength } from "class-validator";

export class TermbaseDto {
  @IsString()
  @IsNotEmpty()
  @Length(5, 50)
  termbaseName: string;
}
