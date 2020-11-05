import {
  UpdateMovieRequest,
  validateUpdateMovieRequest,
} from 'collard_admin_models';
import { inject, injectable } from 'tsyringe';
import { createValidationErrorResponse } from '../factories/ValidationErrorResponse.factory';
import { OperationRersult } from '../internal_types/OperationResult';
import { IMovieService } from '../services/MovieService/IMovieService';

@injectable()
export class UpdateMovieHandler {
  constructor(@inject('IMovieService') private service: IMovieService) {}

  public async handleMovieUpdate(
    request: UpdateMovieRequest
  ): Promise<OperationRersult> {
    const validationResul = validateUpdateMovieRequest(request);

    if (!validationResul) {
      const errorResponse = createValidationErrorResponse(
        validateUpdateMovieRequest.errors
      );
      return { success: false, ...errorResponse };
    }

    try {
      await this.service.update(request);
    } catch (err) {
      return { success: false, Errors: [err] };
    }

    return { success: true, Errors: [] };
  }
}
