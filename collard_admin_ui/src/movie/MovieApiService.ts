import { MovieContract } from '@m_chmiell/collard_admin_models';
import {validateMovie} from '@m_chmiell/collard_admin_models';


export class MovieApiService{
    save(movie:MovieContract){
        console.log(validateMovie(movie));
    }
}