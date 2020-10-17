import { RouteItem } from '../../../common/routing/RouteItem';
import { MovieListing } from '../../listing/MovieListing';
import { RouteSection } from '../../../common/routing/RouteSection';
import MovieAddSection from '../../add';

export enum MovieRoutPaths {
  Add = '/movie/add',
  All = '/movie',
}

export const MovieRoutes: RouteItem[] = [
  {
    key: 'movie-view-all-section',
    path: MovieRoutPaths.All,
    component: MovieListing,
    name: 'View all',
    exact: true,
  },
  {
    key: 'movie-add-section',
    component: MovieAddSection,
    path: MovieRoutPaths.Add,
    name: 'Add new',
    exact: true,
  },
];

export const movieSection: RouteSection = {
  items: MovieRoutes,
  sectionName: 'Movie',
};
