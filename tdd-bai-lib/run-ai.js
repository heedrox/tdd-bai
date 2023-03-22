import dotenv from 'dotenv'
import fs from 'fs'
import { queryGpt } from './query-gpt-chat.js';
import jest from 'jest'

dotenv.config()
const openAiKey = process.env.OPENAI_API_KEY

const filenameInput = `./src/${process.argv[2]}.test.js`
const filenameOutput = `./src/${process.argv[2]}.js`
const filenameTmp = `./src/${process.argv[2]}.tmp.json`

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

const readFile = (filename) => fs.readFileSync(filename)
const removeFile = (filename) => fs.unlinkSync(filename)

const content = openFile(filenameInput)

;(async () => {
    try {
        const gptRes = await queryGpt(content, openAiKey);
        await writeFile(filenameOutput, gptRes)
        await jest.run([filenameInput, "--bail=999", "--silent", "--json", `--outputFile=${filenameTmp}`])
        const testResult = readFile(filenameTmp)
        console.log(JSON.parse(testResult))
        await removeFile(filenameTmp)
    } catch (err) {
        console.error('GENERAL ERROR', err)
    }
})()
