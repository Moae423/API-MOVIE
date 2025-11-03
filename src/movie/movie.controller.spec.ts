import { Test, TestingModule } from '@nestjs/testing';
import { MovieController } from './movie.controller';

describe('MovieController', () => {
  let controller: MovieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovieController],
    }).compile();

    controller = module.get<MovieController>(MovieController);
  });

  it('Should return MovieResponse', () => {
    const movies = controller.getMovies();
    expect(movies).toBe('Movies retrieved successfully');
    expect(movies).toBe(true);
    expect(movies).toBe(undefined);
    expect(movies).toBe(null);
  });
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
