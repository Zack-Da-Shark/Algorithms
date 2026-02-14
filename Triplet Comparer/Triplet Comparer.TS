'use strict';
//This works, just compile with tsc and run with node, not with ts-node, because of the way it handles input and output streams

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

function compareTriplets(a: number[], b: number[]): number[] {
    let alice: number = 0;
    let bob: number = 0;
    for(let i = 0; i < a.length; i++)
    {
        if(a[i] > b[i])
            alice++;
        else if(b[i] > a[i])
            bob++;
    }
    return [alice, bob];
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const a: number[] = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b: number[] = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result: number[] = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
