import {
  CreateMovieRequest,
  EntityReference,
  ListingRequest,
  MovieContract,
  MovieSearchResponse,
} from 'collard_admin_models';
import { MovieListingFilters } from './listing/filters/MovieListingFilters';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export class MovieApiService {
  private baseUrl: string = 'http://localhost:8000';

  save(movie: CreateMovieRequest): Promise<void> {
    const requestUrl = `${this.baseUrl}/movie/create`;
    return axios.post(requestUrl, movie);
  }

  getById(id: string): Promise<AxiosResponse<MovieContract>> {
    const requestUrl = `${this.baseUrl}/movie`;
    const config: AxiosRequestConfig = {
      params: {
        id,
      },
    };
    return axios.get(requestUrl, config);
  }

  fetchListingData(
    filters: MovieListingFilters
  ): Promise<AxiosResponse<MovieSearchResponse>> {
    const requestUrl = `${this.baseUrl}/movie/page`;
    const listingRequest: ListingRequest = {
      PageNumber: filters.pageNumber.toString(),
      PageSize: filters.pageSize.toString(),
    };
    const config: AxiosRequestConfig = {
      params: {
        ...listingRequest,
      },
    };
    return axios.get(requestUrl, config);
  }

  searchDirectors(query: string): Promise<AxiosResponse<EntityReference[]>> {
    const requestUrl = `${this.baseUrl}/director/search`;
    const config: AxiosRequestConfig = {
      params: {
        query,
      },
    };

    return axios.get(requestUrl, config);
  }

  searchActors(query: string): Promise<AxiosResponse<EntityReference[]>> {
    const requestUrl = `${this.baseUrl}/actor/search`;
    const config: AxiosRequestConfig = {
      params: {
        query,
      },
    };

    return axios.get(requestUrl, config);
  }

  fetchCountries(): Promise<AxiosResponse<EntityReference[]>> {
    const requestUrl = `${this.baseUrl}/country/get_all`;
    return axios.get(requestUrl);
  }

  fetchLanguages(): Promise<AxiosResponse<EntityReference[]>> {
    const requestUrl = `${this.baseUrl}/language/get_all`;
    return axios.get(requestUrl);
  }
}
