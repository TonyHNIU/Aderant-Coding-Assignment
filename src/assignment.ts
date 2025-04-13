import * as fs from 'fs';

function mergeFragmentsWithMaxOverlap(fragments: string[]) {
    while (fragments.length > 1) {
        console.log('$$$',fragments)
    let maxOverlapIndex1 = 0, maxOverlapIndex2 = 1, maxOverlapInfo = mergeWithOverlap(fragments[0], fragments[1]);

    for (let i = 0; i < fragments.length; i++) {
            for (let j = i + 1; j < fragments.length; j++) {
                const current = mergeWithOverlap(fragments[i], fragments[j]);
                if (current.overlap > maxOverlapInfo.overlap) {
                    maxOverlapInfo = current;
                    maxOverlapIndex1 = i;
                    maxOverlapIndex2 = j;
                }
            }
        }

    fragments.splice(maxOverlapIndex2, 1);
    fragments.splice(maxOverlapIndex1, 1);
    fragments.push(maxOverlapInfo.merged);

    console.log('!!!', maxOverlapIndex1, maxOverlapIndex2, '@@@', maxOverlapInfo, '###', fragments[0])
    }
    return fragments[0];
}

function mergeWithOverlap(a: string, b: string): { merged: string; overlap: number } {
    let max = 0, merged = a + b;
    console.log('AAA', merged)
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
    console.log('BBB', merged, max)
    return { merged, overlap: max };
}

const input = fs.readFileSync('fragments.txt', 'utf-8').split(/\r?\n/).filter(line => line.trim());
console.log("Output:", mergeFragmentsWithMaxOverlap(input))