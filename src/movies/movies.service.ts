import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  async create(createMovieDto: CreateMovieDto) {
    try {
      const res = await fetch('http://localhost:3000/movies', createMovieDto);
      return {
        status: res.status,
        message: 'lorem ipsum',
        data: res,
      };
    } catch (error) {
      console.log(error);
    }
  }

  findAll() {
    return `This action returns all movies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} movie`;
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
