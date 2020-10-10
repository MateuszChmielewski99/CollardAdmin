import {RouteItem} from "../../../common/routing/RouteItem";
import {MovieAdd} from "../../add/MovieAdd";
import {MovieListing} from "../../listing/MovieListing";
import {RouteSection} from "../../../common/routing/RouteSection";

export enum MovieRoutPaths {
    Add = "/movie/add",
    All = "/movie"
}

export const MovieRoutes:RouteItem[] = [
    {
        key:"movie-add-section",
        component:MovieAdd,
        path:MovieRoutPaths.Add,
        name:'Add new'
    },
    {
        key:'movie-view-all-section',
        path:MovieRoutPaths.All,
        component:MovieListing,
        name:'View all'
    }
];

export const movieSection:RouteSection = {
    items:MovieRoutes,
    sectionName:'Movie'
}