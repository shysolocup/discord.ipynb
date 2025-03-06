const { execSync } = require('node:child_process');
module.exports = {
    run(tasks = './.vscode/tasks.json') {
        const tasks = require('./.vscode/tasks.json');
        tasks.tasks.forEach( (task) => {
            if (task.label == "launch") {
                task.dependsOn.forEach( (taskn) => {
                    tasks.tasks.forEach( (task) => {
                        if (task.label == taskn) execSync(task.command);
                    });
                });
                execSync(task.command);
            }
        });
    }
}