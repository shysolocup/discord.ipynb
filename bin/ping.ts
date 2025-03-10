#!/usr/bin/env node

import * as chalk from 'chalk';
import * as boxen from 'boxen';

const greeting = chalk.default.white.bold("Hello!");

const boxenOptions = {
 padding: 1,
 margin: 1,
 borderColor: "green",
 backgroundColor: "#555555"
};

const msgBox = boxen.default( greeting, boxenOptions );

console.log(msgBox);