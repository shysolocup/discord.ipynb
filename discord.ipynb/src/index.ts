/*

  ____ ___ ____   ____ ___  ____  ____   ___ ______   ___   _ ____  
 |  _ \_ _/ ___| / ___/ _ \|  _ \|  _ \ |_ _|  _ \ \ / / \ | | __ ) 
 | | | | |\___ \| |  | | | | |_) | | | | | || |_) \ V /|  \| |  _ \ 
 | |_| | | ___) | |__| |_| |  _ <| |_| | | ||  __/ | | | |\  | |_) |
 |____/___|____/ \____\___/|_| \_\____(_)___|_|    |_| |_| \_|____/ 


*/

import * as fs from 'fs';
import * as path from 'path';

import { Client } from 'discord.js';

export const client = new Client({
  intents: 53608445
});

client.once('ready', (ctx) => {
  console.log('ready');
});

/**
 * path to the discord.ipynb file
 */
export const appPath = path.join("app", "./discord.ipynb");

// account layout
export type Account = {
  id: string,
  active: boolean,

  settings: {

  }
}

export type SessionData = {
  userId: string
  place: string
  metadata: {}
}

// get accounts and data
export const accounts: { [ key : string]: Account } = {};
const accountfolder = fs.readdirSync(path.join("app", "./accounts"));

console.log(accountfolder);

// import data from '../../app/accounts.json' with { type: "json" };
// Object.assign(accounts, data);

export const sessionData: SessionData = {
  userId: "",
  place: "",
  metadata: {}
}

export type Notebook = {
  cells: cell.CellConstructor[]
}

/**
 * reads from the discord.ipynb file
 * @returns {Notebook}
 */
export function read() {
  return JSON.parse(fs.readFileSync(appPath).toString()) as Notebook;
}

/**
 * writes to the discord.ipynb file
 * @param {Object} filedata - object with data to write to the file
 * @returns {undefined}
 */
export function write(filedata : {}) {
  return fs.writeFileSync(appPath, JSON.stringify(filedata, null, 4));
}

/**
 * loads a page
 * @param {string} pagename - name of the page to load
 * @param {boolean} runscript - if it should run an index.ts file in a page
 * @returns {any | undefined}
 */
export async function loadPage(pagename: string, runscript: boolean = true) {
  let base = path.join("discord.ipynb", `./src/pages/${pagename}/`);

  // write to the app's file using the page
  fs.writeFileSync(appPath, fs.readFileSync(base+"index.ipynb").toString());

  // if an index.ts file exists in the page's directory run that
  try {
    fs.accessSync(base+'index.ts');
    return runscript && (await import(`./pages/${pagename}/index.js`)).init();
  }

  catch {}
}


// imports

import * as cell from './classes/Cell.js'
import * as image from './classes/Image.js';
import * as div from './classes/Div.js';


// load init page

(async () => {
  await loadPage("start");
})()