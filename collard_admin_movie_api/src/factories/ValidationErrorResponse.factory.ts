import ajv from 'ajv';

export const createValidationErrorResponse = (errors?:ajv.ErrorObject[] | null) => {
    if(!errors) return;

    const messages = errors.map(err => err.message!);
    return {Errors:messages}
}