import * as fs from 'fs';
import * as path from 'path';

import { appPath, read } from '../index.js';

export type CellConstructor = {
    cell_type: cellType
    metadata?: {}
    source?: { [key: number]: string }
}

export function getCell(index : number) {
    return read().cells[index]
}

export function writeCell(data : CellConstructor, index? : number) {
    let filedata = read();
    (index) ? filedata.cells[index] = data : filedata.cells.push(data);
    fs.writeFileSync(appPath, JSON.stringify(filedata, null, 4));
}

export function init(celldata : CellConstructor) {
    let base : CellConstructor = {
        cell_type: cellType.markdown,
        metadata: {},
        source: []
    }

    Object.assign(base, celldata);

    writeCell(base);

    return base;
}

export enum cellType {
    markdown = "markdown"
}