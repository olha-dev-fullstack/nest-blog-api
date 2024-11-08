import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'First name of the user',
    minLength: 3,
    maxLength: 96,
    example: 'John',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(96)
  firstName: string;

  @ApiPropertyOptional({
    description: 'Last name of the user',
    minLength: 3,
    maxLength: 96,
    example: 'Doe',
  })
  @IsString()
  @IsOptional()
  @MinLength(3)
  @MaxLength(96)
  lastName?: string;

  @ApiProperty({
    description: 'Email address of the user',
    maxLength: 96,
    example: 'john.doe@example.com',
  })
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(96)
  email: string;

  @ApiProperty({
    description: 'Password for the user account',
    minLength: 8,
    maxLength: 96,
    example: 'P@ssw0rd!',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
    message:
      'Minimum eight characters, at least one letter, one number and one special character',
  })
  @MaxLength(96)
  password: string;
}
