import { CreateMovieRequest, EntityReference } from "collard_admin_models";
import React, { createContext, ReactNode, useContext, useReducer } from "react";
import { movieReducer } from "./MovieReducre";
import { LeadingActorsData, GenresData } from "./MovieEvents";

export type MovieState = {
  data: CreateMovieRequest;
  isValid: boolean;
};

const emptyEntityRef: EntityReference = {
  Id: "",
  Name: "",
};

const init: MovieState = {
  data: {
    Director: emptyEntityRef,
    Genres: [],
    ImdbLink: "",
    ImdbScore: 0,
    LeadingActors: [],
    Name: "",
    Year: 0,
    ImagesUrls: undefined,
    OriginalCountry: undefined,
    OriginalLanguage: undefined,
  },
  isValid: false,
};

const MovieContext = createContext<{
  setImagesUrls: (urls: string[]) => void;
  setOriginalLanguages: (languages: EntityReference[]) => void;
  setOriginalCountr: (countries: EntityReference[]) => void;
  setYear: (year: number) => void;
  setLeadingActors: (actors: LeadingActorsData) => void;
  setImdbScore: (score: number) => void;
  setImdbLink: (url: string) => void;
  setGenres: (genres: GenresData) => void;
  setName: (name: string) => void;
  setDirector: (director: EntityReference) => void;
  setIsVald: (isValid: boolean) => void;
  state: MovieState;
} | null>(null);

export const useMovieContext = () => {
  const ctx = useContext(MovieContext);

  if (ctx === null || ctx === undefined) {
    throw new Error("Movie context must be used within movie provider!");
  }

  return ctx;
};

export const MovieProvider = ({ children }: { children: ReactNode }) => {
  const [state, send] = useReducer(movieReducer, init);

  const setImagesUrls = (urls: string[]) => {
    send({
      type: "SET_IMAGES_URLS",
      data: urls,
    });
  };

  const setOriginalLanguages = (data: EntityReference[]) => {
    send({
      type: "SET_ORIGINAL_LANGUAGE",
      data,
    });
  };

  const setOriginalCountr = (data: EntityReference[]) => {
    send({
      type: "SET_ORIGINAL_COUNTRY",
      data,
    });
  };

  const setYear = (data: number) => {
    send({
      type: "SET_YEAR",
      data,
    });
  };

  const setLeadingActors = (data: LeadingActorsData) => {
    send({
      type: "SET_LEADING_ACTORS",
      data,
    });
  };

  const setImdbScore = (data: number) => {
    send({
      type: "SET_IMDB_SCORE",
      data,
    });
  };

  const setImdbLink = (data: string) => {
    send({
      type: "SET_IMDB_LINK",
      data,
    });
  };

  const setGenres = (data: GenresData) => {
    send({
      type: "SET_GENRES",
      data,
    });
  };

  const setName = (data: string) => {
    send({
      type: "SET_NAME",
      data,
    });
  };

  const setDirector = (data: EntityReference) => {
    send({
      type: "SET_DIRECTOR",
      data,
    });
  };

  const setIsVald = (isValid: boolean) => {
    send({
      type: "SET_IS_VALID",
      isValid,
    });
  };

  return (
    <MovieContext.Provider
      value={{
        setDirector,
        setGenres,
        setImagesUrls,
        setImdbLink,
        setImdbScore,
        setIsVald,
        setLeadingActors,
        setName,
        setOriginalCountr,
        setOriginalLanguages,
        setYear,
        state,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
