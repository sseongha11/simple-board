import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateBoardDto {
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(20)
  @ApiProperty({
    description: 'Name',
    required: true,
    example: 'Seongha Hwang',
  })
  name: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Content',
    required: true,
    example: 'Hello',
  })
  contents: string;
}
