import { CreateMovieRequest, EntityReference } from 'collard_admin_models';

export type GenresData = Pick<CreateMovieRequest, 'Genres'>;
export type LeadingActorsData = Pick<CreateMovieRequest, 'LeadingActors'>;

interface SetNameEvent {
  type: 'SET_NAME';
  data: string;
}

interface SetDirector {
  type: 'SET_DIRECTOR';
  data: EntityReference;
}

interface SetGenres {
  type: 'SET_GENRES';
  data: GenresData;
}

interface SetImdbLink {
  type: 'SET_IMDB_LINK';
  data: string;
}

interface SetImdbScore {
  type: 'SET_IMDB_SCORE';
  data: number;
}

interface SetLeadingActors {
  type: 'SET_LEADING_ACTORS';
  data: LeadingActorsData;
}

interface SetYear {
  type: 'SET_YEAR';
  data: number;
}

interface SetOriginalCountr {
  type: 'SET_ORIGINAL_COUNTRY';
  data: EntityReference[] | undefined;
}

interface SetOriginalLanguage {
  type: 'SET_ORIGINAL_LANGUAGE';
  data: EntityReference[] | undefined;
}

interface SetIsValid {
  type: 'SET_IS_VALID';
  isValid: boolean;
}

interface SetImagesUrls {
  type: 'SET_IMAGES_URLS';
  data: string[];
}

export type MovieEvents =
  | SetNameEvent
  | SetDirector
  | SetGenres
  | SetOriginalLanguage
  | SetOriginalCountr
  | SetYear
  | SetLeadingActors
  | SetImdbScore
  | SetImdbLink
  | SetIsValid
  | SetImagesUrls;
