import { validateCreateMovieRequest } from 'collard_admin_models';

export class MovieApiService {
  save(movie: any) {
    validateCreateMovieRequest({});
    console.log(validateCreateMovieRequest.errors);
  }
}
