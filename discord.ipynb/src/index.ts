import * as fs from 'fs';
import * as path from 'path';

let appPath = path.join("app", "./discord.ipynb");

type Notebook = {
  cells: cell.CellConstructor[]
}

export { appPath };

export function read() {
  return JSON.parse(fs.readFileSync(appPath).toString()) as Notebook;
}

import * as cell from './classes/Cell.js'

fs.writeFileSync(appPath, fs.readFileSync(path.join("discord.ipynb", './src/base.ipynb')).toString());

/*let newCell = cell.init({
  cell_type: cell.cellType.markdown,
  source: [
    "a",
    "b"
  ]
})

console.log(newCell);
*/