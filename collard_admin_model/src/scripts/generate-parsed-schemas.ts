const parser = require('@apidevtools/json-schema-ref-parser')
const fs = require('fs')
const pathName = 'src/models'
const dereferenceSchemas = require('./process-schemas')

const createDir = (dirName: string) => {
    fs.mkdirSync(dirName, { recursive: true }, (err) => {
        if (err) console.log(err)
    })
}

const writeToFile = async (path, schema: string) => {
    await fs.writeFile(path, schema, (err) => {
        if (err) console.log(err)
        else console.log(`saved root schema`)
    })
}

const dereference = async (file: string, dirName) => {
    try {
        let schema = await parser.dereference(`${dirName}/${file}`)

        const newName = dirName.replace('schemas', 'schema-root')

        createDir(newName)

        schema.$id = schema.$id.replace('schemas', 'schema-root')

        await writeToFile(`${newName}/${file}`, JSON.stringify(schema))
    } catch (err) {
        console.error(err)
    }
}

;(async () => {
    const index = process.argv.indexOf('-p')
    const path = index !== -1 ? process.argv[index + 1] : pathName

    await dereferenceSchemas(path + '/schemas', dereference)
})()
