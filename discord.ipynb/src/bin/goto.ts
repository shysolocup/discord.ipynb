#!/usr/bin/env node

import { Command } from 'commander';

let cmd = new Command();

cmd
.version("1.0.0")
.description("changes page to a given server/dm/channel/page/account");