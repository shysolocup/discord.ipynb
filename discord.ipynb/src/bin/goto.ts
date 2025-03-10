#!/usr/bin/env node

import * as yargs from 'yargs';
import { loadPage } from '../index.js';

(async () => {

    const options = await (yargs.default()
        .usage("Usage: --t <type> --p <place>")
        .option("type", { describe: "type to go to (eg: server/channel/dm/page)", type: "string", demandOption: true })
        .option("place", { describe: "where you want to go to (eg: server#/channel#/pagename)", type: "string", demandOption: true })
        .argv);

    if (options.type == "page") {
        loadPage(options.place);
    }
    
    console.log(`navigating to ${options.type}: ${options.place}`);

})();