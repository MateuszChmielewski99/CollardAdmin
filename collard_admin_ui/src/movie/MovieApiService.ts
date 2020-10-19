import { EntityReference, validateCreateMovieRequest } from 'collard_admin_models';
import { generateUuid } from '../common/helpers/generateUuid';

export class MovieApiService {
  save(movie: any) {
    validateCreateMovieRequest({});
    console.log(validateCreateMovieRequest.errors);
  }

  fetchDirectors(){
    const exampleDirectors:EntityReference[] = [
      {
        Id:generateUuid(),
        Name:'Dir 1'
      },
      {
        Id:generateUuid(),
        Name:'Dir 2'
      }] 
    return Promise.resolve(exampleDirectors)
  }
}
