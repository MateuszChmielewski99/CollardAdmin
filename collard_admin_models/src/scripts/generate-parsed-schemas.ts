const parser = require("@apidevtools/json-schema-ref-parser")
const fs = require('fs');
const path = require('path');

const blackList = [
    "common-definitions.schema.json"
];

const pathName = "src/models/schemas";

const getFiles = async (dirName: string) => {
    await fs.readdir(dirName, async (errors, files) => {
        for (const file of files) {
            if (blackList.some(s => s === file)) continue;

            if (path.extname(file) === "") {
                await getFiles(dirName + '/' + file);
            }
            if (path.extname(file) === ".json") {
                await dereference(file, dirName);
            }
        }

    })
}

const createDir = (dirName:string) => {
    fs.mkdirSync(dirName, { recursive: true }, err => {
        if(err) console.log(err);
    });
}

const writeToFile = async (path,schema:string) => {
    await fs.writeFile(path, schema, err => {
        if (err) console.log(err);
        else console.log(`saved root schema`);
    })
}

const dereference = async (file: string, dirName) => {
    try {
        let schema = await parser.dereference(`${dirName}/${file}`);

        const newName = dirName.replace('schemas', 'schema-root');

       createDir(newName);

       await writeToFile(`${newName}/${file}`, JSON.stringify(schema));

    } catch (err) {
        console.error(err);
    }
}


(async () => await getFiles(pathName))();