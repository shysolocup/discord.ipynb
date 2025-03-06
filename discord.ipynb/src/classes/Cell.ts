import * as fs from 'fs';
import * as path from 'path';

import { appPath, read, write } from '../index.js';

export enum cellType {
    markdown = "markdown"
}

export class CellSource extends Array {    
    constructor(source? : string[]) {
        super();
        Object.assign(this, source);
    }

    addLine(text : string, line? : number) {
        (line) ? this.splice(line, 0, text + "\n") : this.push(text + "\n");
    }

    static fromString() {
        
    }
}

export interface CellConstructor {
    cell_type: string
    metadata: {
        [key: string]: any
    }
    source: CellSource
}

interface CellOptions {
    cell_type: string
    metadata?: {},
    source?: CellSource
}

export function getCell(index : number) {
    return read().cells[index]
}

export function writeCell(data : CellConstructor, index? : number) {
    let filedata = read();
    (index) ? filedata.cells[index] = data : filedata.cells.push(data);
    write(filedata);
}

export function init(celldata : CellOptions) {
    let base : CellConstructor = {
        cell_type: "markdown",
        metadata: {},
        source: new CellSource
    }

    Object.assign(base, celldata);

    writeCell(base);

    return base;
}