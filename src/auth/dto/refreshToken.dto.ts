import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class RefreshTokenDto {
  @ApiProperty({
    description: 'Refresh tocken value',
    example: '<your-value>',
  })
  @IsNotEmpty()
  @IsString()
  refreshToken: string;
}
