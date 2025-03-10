import * as fs from 'fs';
import * as path from 'path';

import { Client } from 'discord.js';

export const client = new Client({
  intents: 53608445
});

client.once('ready', (ctx) => {
  console.log('ready');
})

export const appPath = path.join("app", "./discord.ipynb");


// account layout
export type Account = {
  id: string,
  active: boolean,

  settings: {

  }
}

export type SessionData = {
  place: string
  metadata: {}
}

// get accounts and data
export const accounts: { [ key : string]: Account } = {};
import data from '../../app/accounts.json' with { type: "json" };
Object.assign(accounts, data);

export const sessionData: SessionData = {
  place: "",
  metadata: {}
}

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
  let base = path.join("discord.ipynb", `./src/pages/${pagepath}/`);

  // write to the app's file using the page
  fs.writeFileSync(appPath, fs.readFileSync(base+"index.ipynb").toString());

  // if an index.ts file exists in the page's directory run that
  fs.access(base+'index.ts', async err => !err && (await import(`./pages/${pagepath}/index.js`)).init());
}

import * as cell from './classes/Cell.js'
import * as image from './classes/Image.js';
import * as div from './classes/Div.js';

// load init page
(async () => {
  await loadPage("start");
})()