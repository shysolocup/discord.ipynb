import { Client } from "discordx";


import { dirname, importx } from "@discordx/importer";
import { IntentsBitField } from "discord.js";


import * as fs from 'fs';
import * as path from 'path';

import fetch from 'node-fetch';


export const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildMessageReactions,
    IntentsBitField.Flags.GuildVoiceStates,
    IntentsBitField.Flags.MessageContent,
  ],

  silent: false,
});


const users = fs.readdirSync(path.join("app", "./users"));


users.forEach( async (file) => {
  if (file.endsWith(".json")) {
    const { default: info } = await import(`../../app/users/${file}`, {
      assert: {
        type: "json",
      },
    });

    if (info.token) {

    }
    else if (info.email && info.password) {
      fetch("https://discord.com/api/v8/auth/login");
    }

    const { token } = info;

    
  }
});


async function run() {
  // await importx(`${dirname(import.meta.url)}/{events,commands}/**/*.{ts,js}`);
  // await client.login("");
}


void run();