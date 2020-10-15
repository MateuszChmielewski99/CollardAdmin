const bl = require("./black-list")

const path = require('path');
const fileSyst = require('fs')

const getFiles = async (dirName: string, callback:(file:string, dir:string) => Promise<void>) => {
    await fileSyst.readdir(dirName, async (errors, files) => {
        if(errors) console.error(errors);


        for (const file of files) {
            if (bl.some((s) => s === file)) continue;

            if (path.extname(file) === '') {
                await getFiles(dirName + '/' + file, callback)
            }
            if (path.extname(file) === '.json') {
                await callback(file, dirName)
            }
        }
    })
}

module.exports = getFiles;