/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Movie model
 */
export type Movie = MovieBaseModel & BaseDocument;

/**
 * Movie model
 */
export interface MovieBaseModel {
  /**
   * Name of a movie
   */
  Name: string;
  /**
   * Year of production
   */
  Year: number;
  OriginalCountry?: {
    Id: string;
    Name: string;
  };
  OriginalLanguage?: {
    Id: string;
    Name: string;
  };
  ImdbLink: string;
  ImdbScore: number;
  Genres:
    | []
    | ["Animation" | "Action" | "Comedy" | "Family" | "Horror" | "Thriller" | "Crime" | "Drama" | "Romance" | "Fantasy"]
    | [
        (
          | "Animation"
          | "Action"
          | "Comedy"
          | "Family"
          | "Horror"
          | "Thriller"
          | "Crime"
          | "Drama"
          | "Romance"
          | "Fantasy"
        ),
        "Animation" | "Action" | "Comedy" | "Family" | "Horror" | "Thriller" | "Crime" | "Drama" | "Romance" | "Fantasy"
      ]
    | [
        (
          | "Animation"
          | "Action"
          | "Comedy"
          | "Family"
          | "Horror"
          | "Thriller"
          | "Crime"
          | "Drama"
          | "Romance"
          | "Fantasy"
        ),
        (
          | "Animation"
          | "Action"
          | "Comedy"
          | "Family"
          | "Horror"
          | "Thriller"
          | "Crime"
          | "Drama"
          | "Romance"
          | "Fantasy"
        ),
        "Animation" | "Action" | "Comedy" | "Family" | "Horror" | "Thriller" | "Crime" | "Drama" | "Romance" | "Fantasy"
      ];
  /**
   * Leading actors
   */
  LeadingActors:
    | []
    | [
        {
          Id: string;
          Name: string;
        }
      ]
    | [
        {
          Id: string;
          Name: string;
        },
        {
          Id: string;
          Name: string;
        }
      ]
    | [
        {
          Id: string;
          Name: string;
        },
        {
          Id: string;
          Name: string;
        },
        {
          Id: string;
          Name: string;
        }
      ];
  /**
   * Director
   */
  Director: {
    Id: string;
    Name: string;
  };
  ImagesUrls?: string[];
}
/**
 * Base properties of all documents in db
 */
export interface BaseDocument {
  /**
   * timestamp of creation
   */
  _ts: number;
  _id: string;
}
