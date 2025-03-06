import * as fs from 'fs';
import * as path from 'path';

import { appPath, read, write } from '../index.js';

export enum cellType {
    markdown = "markdown"
}

export interface CellConstructor {
    cell_type: string
    metadata: {
        [key: string]: any
    }
    source: { [key: string]: string }
}

interface CellOptions {
    cell_type: string
    metadata?: {},
    source?: { [key: string]: string }
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
        source: {}
    }

    Object.assign(base, celldata);

    writeCell(base);

    return base;
}