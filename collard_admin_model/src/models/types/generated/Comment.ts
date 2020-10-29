/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Comment
 */
export type Comment = {
  Content: string;
  MovieId: string;
  UserId: string;
} & BaseDocument;

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
