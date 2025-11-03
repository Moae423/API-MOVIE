import { IsString, IsNotEmpty, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateMovieDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  director: string;

  @Type(() => Date) // Konversi string ke Date
  @IsDate()
  @IsNotEmpty()
  releaseDate: Date;

  @IsString()
  @IsNotEmpty()
  genre: string;
}
