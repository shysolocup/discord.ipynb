#!/usr/bin/env node

const yargs = require("yargs");

const options = yargs
 .usage("Usage: --type <type>")
 .option("n", { alias: "type", describe: "type to go to eg: server/dm", type: "string", demandOption: true })
 .argv;

const greeting = `Hello, ${options.type}!`;

console.log(greeting);