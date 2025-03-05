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
import * as image from './classes/Image.js';
import * as div from './classes/Div.js';

fs.writeFileSync(appPath, fs.readFileSync(path.join("discord.ipynb", './src/base.ipynb')).toString());

let newCell = cell.init({
  cell_type: cell.cellType.markdown,
  source: [
    "a",
    "b",
    image.init({
      src: "https://blog.pinwheel.com/hubfs/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png",
      size: 50,
      div: true,
      align: div.alignment.center
    }),
    "c"
  ]
})

console.log(newCell);