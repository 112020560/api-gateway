import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  username: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  text: string;
  @IsDate()
  @ApiProperty()
  created_at: Date;
}
