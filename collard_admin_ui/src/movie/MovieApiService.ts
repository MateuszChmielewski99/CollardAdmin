import {
  CreateMovieRequest,
  EntityReference,
  MovieContract,
  validateCreateMovieRequest,
} from 'collard_admin_models';
import { generateUuid } from '../common/helpers/generateUuid';
import { MovieListingFilters } from './listing/filters/MovieListingFilters';

export class MovieApiService {
  save(movie: CreateMovieRequest): Promise<void> {
    validateCreateMovieRequest(movie);
    return Promise.resolve();
  }

  getById(id: string):Promise<MovieContract> {
    const data: MovieContract = {
      Director: {
        Id: 'a3f0f15e-1627-11eb-adc1-0242ac120002',
        Name: 'example',
      },
      Genres: ['Action'],
      ImdbLink: 'some link',
      ImdbScore: 9.0,
      LeadingActors: [{ Id: '123', Name: 'example' }],
      Name: 'Mock data',
      Year: 1999,
      id: '123',
      OriginalCountry: {
        Id: '123',
        Name: 'example country',
      },
      OriginalLanguage: {
        Id: '123',
        Name: 'example lang',
      },
    };

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  }

  fetchListingData(filters: MovieListingFilters) {
    const data = [
      {
        id: 'a3f0f15e-1627-11eb-adc1-0242ac120002',
        Name: 'Harry Potter',
        Year: '2013',
        Director: { Id: '123', Name: 'Nie wiem' },
      },
      {
        id: 'a3f0f15e-1627-11eb-adc1-0242ac120002',
        Name: 'Harry Potter 1',
        Year: '2012',
        Director: { Id: '1234', Name: 'Nie wiem2' },
      },
    ];

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  }

  searchDirectors(query: string) {
    const exampleDirectors: EntityReference[] = [
      {
        Id: generateUuid(),
        Name: 'Dir 1',
      },
      {
        Id: generateUuid(),
        Name: 'Dir 2',
      },
    ];
    return Promise.resolve(exampleDirectors);
  }

  searchActors(query: string) {
    const exampleDirectors: EntityReference[] = [
      {
        Id: generateUuid(),
        Name: 'Dir 1',
      },
      {
        Id: generateUuid(),
        Name: 'Dir 2',
      },
    ];
    return Promise.resolve(exampleDirectors);
  }

  fetchCountries(): Promise<EntityReference[]> {
    const exampleDirectors: EntityReference[] = [
      {
        Id: generateUuid(),
        Name: 'Country 1',
      },
      {
        Id: generateUuid(),
        Name: 'Country 2',
      },
    ];
    return Promise.reject(exampleDirectors);
  }

  fetchLanguages(): Promise<EntityReference[]> {
    const exampleDirectors: EntityReference[] = [
      {
        Id: generateUuid(),
        Name: 'Lang 1',
      },
      {
        Id: generateUuid(),
        Name: 'Lang 2',
      },
    ];
    return Promise.resolve(exampleDirectors);
  }
}
