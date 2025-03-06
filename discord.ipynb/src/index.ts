import * as fs from 'fs';
import * as path from 'path';

export const appPath = path.join("app", "./discord.ipynb");

export type Account = {
  user: {
    id: string,
    username: string,
    token: string,
    active: boolean
  },

  settings: {

  }
}

export const accounts: { [ key : string]: Account } = {};
import data from '../../app/accounts.json' with { type: "json" };
Object.assign(accounts, data);


export type Notebook = {
  cells: cell.CellConstructor[]
}

export function read() {
  return JSON.parse(fs.readFileSync(appPath).toString()) as Notebook;
}

export function write(filedata : {}) {
  return fs.writeFileSync(appPath, JSON.stringify(filedata, null, 4));
}

export async function loadPage(pagepath: string) {
  fs.writeFileSync(appPath, fs.readFileSync(path.join("discord.ipynb", `./src/pages/${pagepath}/index.ipynb`)).toString());
  (await import(`./pages/${pagepath}/index.js`)).init();
}

import * as cell from './classes/Cell.js'
import * as image from './classes/Image.js';
import * as div from './classes/Div.js';

(async () => {
  await loadPage("start");
})()