import dotenv from 'dotenv'
import fs from 'fs'
import { queryGpt } from './query-gpt-chat.js';

dotenv.config()
const openAiKey = process.env.OPENAI_API_KEY

const filenameInput = `./src/${process.argv[2]}.test.js`
const filenameOutput = `./src/${process.argv[2]}.js`

const openFile = (filename) => {
    try {
        return fs.readFileSync(filename, {encoding:'utf8', flag:'r'})
    } catch (e) {
        console.error(`Cannot open file: ${filename}`)
        process.exit(1)
    }
}

const writeFile = (filename, content) => {
    try {
        fs.writeFileSync(filename, content, {encoding:'utf8'})
        console.log(`Written ${filename} - ${content.length} bytes`)
    } catch (e) {
        console.error(`Cannot write content to file: ${filename}`, e)
        process.exit(1)
    }
}

const content = openFile(filenameInput)

queryGpt(content, openAiKey)
    .then((res) => writeFile(filenameOutput, res))
    .catch(err => console.error(err))
