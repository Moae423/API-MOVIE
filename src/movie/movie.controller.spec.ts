import { Test, TestingModule } from '@nestjs/testing';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';

describe('MovieController', () => {
  let controller: MovieController;
  let movieService: MovieService;

  const mockMovieService = {
    getMovies: jest.fn().mockResolvedValue('Movies retrieved successfully'),
    createMovie: jest.fn().mockResolvedValue('Movie created successfully'),
    updateMovie: jest.fn().mockResolvedValue('Movie updated successfully'),
    deleteMovie: jest.fn().mockResolvedValue('Movie deleted successfully'),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovieController],
      providers: [
        {
          provide: 'MovieService',
          useValue: mockMovieService,
        },
      ],
    }).compile();

    controller = module.get<MovieController>(MovieController);
    movieService = module.get<MovieService>(MovieService);
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
