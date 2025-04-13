import * as fs from 'fs';

function mergeWithOverlap(a: string, b: string): { merged: string; overlap: number } {
    let max = 0, merged = a + b;
    console.log('!!!', merged)
    for (let i = 1; i <= Math.min(a.length, b.length); i++) {
        if (a.slice(-i) === b.slice(0, i)) {
            if (i > max) {
                max = i;
                merged = a + b.slice(i);
            }
        }
        if (b.slice(-i) === a.slice(0, i)) {
            if (i > max) {
                max = i;
                merged = b + a.slice(i);
            }
        }
    }
    console.log('@@@', merged, max)
    return { merged, overlap: max };
}

const input = fs.readFileSync('fragments.txt', 'utf-8').split(/\r?\n/).filter(line => line.trim());
console.log("Output:", mergeWithOverlap('abc', 'cde'))