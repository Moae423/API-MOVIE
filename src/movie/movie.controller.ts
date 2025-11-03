import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieResponse } from './movie.interface';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from '@prisma/client';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  @HttpCode(200)
  @Header('Content-Type', 'application/json')
  async getMovies(): Promise<MovieResponse<Movie[]>> {
    const movies = await this.movieService.getMovies();
    return {
      message: 'Movies retrieved successfully',
      success: true,
      error: undefined,
      data: movies,
    };
  }

  @Post()
  @HttpCode(201)
  async createMovie(
    @Body() createMovie: CreateMovieDto,
  ): Promise<MovieResponse<Movie>> {
    const newMovie = await this.movieService.createMovie(createMovie);
    // newMovie sekarang adalah Movie object (bukan array)
    return {
      message: 'Movie created successfully',
      success: true,
      error: undefined,
      data: newMovie, // ✅ Single object
    };
  }

  @Get('/:id')
  @HttpCode(200)
  async getMovieById(@Param('id') id: string): Promise<MovieResponse<Movie>> {
    const movie = await this.movieService.getMovieById(id);
    if (!movie) {
      throw new NotFoundException(`Movie with id ${id} not found`);
    }
    return {
      message: 'Movie retrieved successfully',
      success: true,
      error: undefined,
      data: movie,
    };
  }

  @Put('/:id')
  @HttpCode(202)
  async updateMovie(
    @Param('id') id: string,
    @Body() updateMovie: UpdateMovieDto,
  ): Promise<MovieResponse<Movie>> {
    const updatedMovie = await this.movieService.updateMovie(id, updateMovie);
    if (!updatedMovie) {
      throw new NotFoundException(`Movie with id ${id} not found`);
    }
    return {
      message: 'Movie updated successfully',
      success: true,
      error: undefined,
      data: updatedMovie,
    };
  }

  @Delete('/:id')
  @HttpCode(202)
  async deleteMovie(@Param('id') id: string): Promise<MovieResponse<Movie>> {
    const deletedMovie = await this.movieService.deleteMovie(id);
    if (!deletedMovie) {
      throw new NotFoundException(`Movie with id ${id} not found`);
    }
    return {
      message: 'Movie deleted successfully',
      success: true,
      error: undefined,
      data: deletedMovie,
    };
  }
}
