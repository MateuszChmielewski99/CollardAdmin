import { container } from 'tsyringe';
import express, { Router, Response, Request } from 'express';
import { IMovieService } from '../services/MovieService/IMovieService';
import { MovieService } from '../services/MovieService/MovieService';
import {
  CreateMovieRequest,
  ListingRequest,
  UpdateMovieRequest,
  validateCreateMovieRequest,
  validateUpdateMovieRequest,
} from 'collard_admin_models';
import { createValidationErrorResponse } from '../factories/ValidationErrorResponse.factory';
import { UpdateMovieHandler } from '../handlers/UpdateMovie.handler';

const MovieRouter: Router = express.Router();

const getMovie = async (req: Request, res: Response) => {
  const service: IMovieService = container.resolve(MovieService);

  const id = req.query.id as string;

  if (!id) res.status(400).send('Id must be provided');

  const result = await service.getById(id);
  
  res.json(result);
};

const deleteMovie = async (req: Request, res: Response) => {
  const service: IMovieService = container.resolve(MovieService);

  const id = req.query.id as string;

  if (!id) res.status(400).send('Id must be provided');

  await service.delete(id);

  res.send({});
};

const updateMovie = async (req: Request, res: Response) => {
  const handler: UpdateMovieHandler = container.resolve(UpdateMovieHandler);
  const request: UpdateMovieRequest = req.body;

  const result = await handler.handleMovieUpdate(request);
  
  if (!result.success) {
    res.status(400).send(result.Errors);
  }

  res.send();
};

const createMovie = async (req: Request, res: Response) => {
  const service: IMovieService = container.resolve(MovieService);

  const request: CreateMovieRequest = req.body;

  const validationResul = validateCreateMovieRequest(request);

  if (!validationResul) {
    const errorResponse = createValidationErrorResponse(
      validateUpdateMovieRequest.errors
    );
    res.status(400).send(errorResponse);
  }

  await service.save(request);

  res.send();
};

const getPagedResult = async (req: Request, res: Response) => {
  const service: IMovieService = container.resolve(MovieService);

  const result = await service.getPaged(req.query as unknown as ListingRequest);

  res.json(result);
}

MovieRouter.get('/', getMovie);
MovieRouter.delete('/delete', deleteMovie);
MovieRouter.put('/update', updateMovie);
MovieRouter.post('/create', createMovie);
MovieRouter.get('/page',getPagedResult);

export default MovieRouter;
