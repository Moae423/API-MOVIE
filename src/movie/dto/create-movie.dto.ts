import { IsString, IsNotEmpty, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

/*
All the fields in the CreateMovieDto class are required.
*/

export class CreateMovieDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  director: string;

  /*
  This Field Will be Convert from string to date
*/
  @Type(() => Date)
  @IsDate()
  @IsNotEmpty()
  releaseDate: string;

  @IsString()
  @IsNotEmpty()
  genre: string;
}
