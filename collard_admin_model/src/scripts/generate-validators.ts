const modelsPathName = 'src/models';
const indexOfPath = process.argv.indexOf('-p');
let currentPathNaame =
  indexOfPath !== -1 ? process.argv[indexOfPath + 1] : modelsPathName;
const fileSystem = require('fs');
currentPathNaame += '/schema-root';

const generateVals = require('./process-schemas');

const getSchemaImport = (fileName: string, dirName: string) => {
  return `import schema from '../../${dirName}/${fileName}';`;
};

const getImports = () => {
  return "import Ajv from 'ajv'; \n import ajvErrors from 'ajv-errors'; \n";
};

const configureAjv = () => {
  return 'const ajv = new Ajv({allErrors:true, jsonPointers:true, $data:true}); \n ajvErrors(ajv, {keepErrors:true});';
};

const getMakeValidatorFun = () => {
  return 'function makeValidator(key:string):Ajv.ValidateFunction {return ajv.getSchema(key)!;}';
};

const addSchemaToAjv = () => {
  return "ajv.addSchema(schema, schema.$id || 'untitled');";
};

const getExport = (fileName: string) => {
  return `export const validate${capitalizeFirsLetter(
    fileName
  )} = makeValidator(schema.$id);`;
};

const capitalizeFirsLetter = (s: string) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};

(async () =>
  await generateVals(currentPathNaame, async (dir: string, file: string) => {
    const fileName = dir.replace('.schema.json', '');
    const dirName = file.split('/').slice(0, 2).join('/');
    const a = file.replace('src/models/', '');

    console.log(a, 'path');
    console.log();

    const functionName = fileName
      .split('-')
      .map((s) => capitalizeFirsLetter(s))
      .join('');
    const functionString = `${getImports()} \n ${getSchemaImport(
      dir,
      a
    )} ${configureAjv()} ${getMakeValidatorFun()} ${addSchemaToAjv()} ${getExport(
      functionName
    )}`;
    fileSystem.writeFileSync(
      `${dirName}/validators/generated/${fileName}.validator.ts`,
      functionString
    );
  }))();
