# TDD BAI - TDD Based on AI

A proof of concept if we can use TDD BAI to develop something relatively complex.

## Instalation

- Download
- If you use "nvm", then type "nvm use". If not, use node v18
- `npm i`
- Create a `.env` file and add the line `OPENAI_API_KEY=xxxxxx` with your own Open AI API key. Check how to get one here: https://www.windowscentral.com/software-apps/how-to-get-an-openai-api-key

## Example execution

`npm run run-ai string-calculator`

This will read string-calculator.test.js, and dump a string-calculator.js
based on AI.

Where is the limit? We'll try to figure this out adding more complex examples
as we move on.


