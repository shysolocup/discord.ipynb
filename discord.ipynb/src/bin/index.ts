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

/*
const { execSync } = require('node:child_process');

module.exports = {
    run(tasks = './.vscode/tasks.json') {
        const tasklist = require('./.vscode/tasks.json');
        tasklist.tasks.forEach( (task) => {
            if (task.label == "launch") {
                task.dependsOn.forEach( (taskn) => {
                    tasklist.tasks.forEach( (task) => {
                        if (task.label == taskn) execSync(task.command);
                    });
                });
                execSync(task.command);
            }
        });
    }
}
*/