import Ajv from 'ajv';
import ajvErrors from 'ajv-errors';

import schema from '../../schema-root/listing/listing-request.schema.json';
const ajv = new Ajv({ allErrors: true, jsonPointers: true, $data: true });
ajvErrors(ajv, { keepErrors: true });
function makeValidator(key: string): Ajv.ValidateFunction {
  return ajv.getSchema(key)!;
}
ajv.addSchema(schema, schema.$id || 'untitled');
export const validateListingRequest = makeValidator(schema.$id);
