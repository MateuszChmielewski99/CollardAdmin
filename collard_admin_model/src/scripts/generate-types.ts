const compiler = require('json-schema-to-typescript');
const fileSys = require('fs');
const modlesPathName = 'src/models';
const genTypes = require('./process-schemas');

const index = process.argv.indexOf('-p');
const pathNaame = index !== -1 ? process.argv[index + 1] : modlesPathName;

console.log(pathNaame);

const capitalize = (s: string) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const compileJsonSchema = async (fileName: string, distDir: string) => {
  const splitedFileName = fileName.replace('.schema.json', '').split('-');
  const modelFileName = splitedFileName.map((s) => capitalize(s)).join('');

  try {
    compiler.compileFromFile(`${distDir}/${fileName}`).then((ts) => {
      console.log(ts);
      fileSys.writeFileSync(
        `${pathNaame}/types/generated/${modelFileName}.ts`,
        ts
      );
    });
  } catch (e) {
    console.error('error while compiling');
  }
};

(async () => {
  await genTypes(pathNaame + '/schema-root', compileJsonSchema);
})();
