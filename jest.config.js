import { fileURLToPath } from 'url';
import {dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log(__dirname)

export default {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: [path.resolve(__dirname, 'src/setupTests.js')],
    moduleNameMapper: {
        '\\.css$': 'identity-obj-proxy',
    },    
}