#!/usr/bin/env node

// import { loadPage } from '../discord.ipynb/src/index.js';

const yargs = require("yargs");

const options = yargs
 .usage("Usage: --type <type>")
 .option("type", { alias: "t", describe: "type to go to (eg: server/channel/dm/page)", type: "string", demandOption: true })
 .option("place", { alias: "p", describe: "where you want to go to (eg: server#/channel#/pagename)", type: "string", demandOption: true })
 .argv;

if (options.type == "page") {
    // loadPage(options.place);
}

console.log(`navigating to ${options.type}: ${options.place}`)