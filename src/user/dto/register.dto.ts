import { IsEmail, IsString } from 'class-validator';

export class RegisterDto {
  @IsString()
  email: string;
  
  @IsString()
  pwd: string;
}
