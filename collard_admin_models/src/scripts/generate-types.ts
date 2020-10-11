
const blackList = [
    "common-definitions.schema.json"
];
// @ts-ignore

const compiler = require('json-schema-to-typescript');
const fs = require('fs');
const path = require('path');

const pathName = "src/models/schemas";

const capitalize = (s: string) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

const compileJsonSchema = (fileName: string, distDir: string) => {
    const splitedFileName = fileName.replace('.schema.json', '').split('-');
    const modelFileName = splitedFileName.map(s => capitalize(s)).join('');

    try{
    compiler.compileFromFile(`${distDir}/${fileName}`)
        .then(ts => fs.writeFileSync(`src/models/types/generated/${modelFileName}.ts`, ts))
    }catch (e){
        console.error('error while compiling')
    }
}


const getFiles = async (dirName: string) => {
    await fs.readdir(dirName, async (errors, files) => {
        for (const file of files) {
            if (blackList.some(s => s === file)) continue;
            console.log(file);

            if (path.extname(file) === "") {
                await getFiles(dirName + '/' + file);
            }
            if (path.extname(file) === ".json") {
                 await compileJsonSchema(file, dirName);
            }
        }

    })
}

(async () => {
    await (getFiles(pathName));
})();
