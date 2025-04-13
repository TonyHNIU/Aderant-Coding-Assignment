import * as fs from 'fs';

const input = fs.readFileSync('fragments.txt', 'utf-8').split(/\r?\n/).filter(line => line.trim());
console.log("Output:", input)