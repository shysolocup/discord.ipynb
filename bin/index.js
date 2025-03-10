#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");

const greeting = chalk.white.bold("Hello!");

const boxenOptions = {
 padding: 1,
 margin: 1,
 borderStyle: "round",
 borderColor: "green",
 backgroundColor: "#555555"
};

const msgBox = boxen( greeting, boxenOptions );

console.log(msgBox);


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