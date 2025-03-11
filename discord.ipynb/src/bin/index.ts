#!/usr/bin/env node

import * as figlet from 'figlet';

process.stdout.write(figlet.default.textSync("DISCORD.IPYNB"));


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