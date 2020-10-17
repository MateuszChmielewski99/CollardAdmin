import { movieSection } from '../../movie/common/routes/movie-routes';
import { RouteSection } from './RouteSection';
import { RouteItem } from './RouteItem';

export const appRoutes: RouteItem[] = [...movieSection.items];

export const menuRouteSections: RouteSection[] = [movieSection];
