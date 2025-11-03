import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MovieService {
  constructor(private prisma: PrismaService) {}

  async getMovies() {
    return this.prisma.movie.findMany();
  }

  async createMovie(data: CreateMovieDto) {
    return this.prisma.movie.create({ data });
  }

  async getMovieById(id: string) {
    return await this.prisma.movie.findUnique({
      where: { id },
    });
  }

  async updateMovie(id: string, data: UpdateMovieDto) {
    return await this.prisma.movie.update({
      where: { id },
      data,
    });
  }

  async deleteMovie(id: string) {
    return await this.prisma.movie.delete({
      where: { id },
    });
  }
}
