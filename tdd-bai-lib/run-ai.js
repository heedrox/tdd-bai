import dotenv from 'dotenv'
import fs from 'fs'
import { queryGpt } from './query-gpt-chat.js';
import jest from 'jest'
import stripAnsi from "strip-ansi";

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

const fromUser = (content) => ({ role: "user", content })
const fromAssistant = (content) => ({ role: "assistant", content })
const content = openFile(filenameInput)

;(async () => {
    try {
        const gptRes = await queryGpt([ fromUser(content) ], openAiKey);
        await writeFile(filenameOutput, gptRes)
        await jest.run([filenameInput, "--bail=999", "--silent", "--json", `--outputFile=${filenameTmp}`])
        const testResult = readFile(filenameTmp)
        const parsedResults = JSON.parse(testResult.toString())
        if (!parsedResults.success ) {
            const message = stripAnsi(parsedResults.testResults[0].message)
            const gptRes = await queryGpt([ fromUser(content), fromAssistant(message) ], openAiKey);
            await writeFile(filenameOutput, gptRes)
            await jest.run([filenameInput, "--bail=999", "--silent", "--json", `--outputFile=${filenameTmp}`])
        }

        await removeFile(filenameTmp)
    } catch (err) {
        console.error('UNCONTROLLED ERROR', err)
    }
})()
