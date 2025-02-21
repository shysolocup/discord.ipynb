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


client.on("ready", (ctx) => {
  console.log(`logged in as ${ctx.user.username}`);
})


const users = fs.readdirSync(path.join("app", "./users"));


type userInfo = {
  token?: string,
  email?: string,
  password?: string,
  active: boolean
}


users.forEach( async (file) => {
  if (file.endsWith(".json")) {
    let { default: info } = await import(`../../app/users/${file}`, {
      assert: {
        type: "json",
      },
    });

    info = info as userInfo;

    if (!info.active) return;

    let guh = await fetch('https://discord.com/api/v10/auth/login');
    
    if ((!info.token || info.token.trim().length == 0) && (info.email && info.email.trim().length > 0) && (info.password && info.password.trim().length > 0)) {
      let res = await fetch("https://discord.com/api/v10/auth/login", {
        method: 'post',

        headers: {
          'content-type': "application/json", 
          'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36"
        },

        body: JSON.stringify({
          'email': info.email.trim(), 
          'password': info.password.trim(), 
          'undelete': false
        })
      });

      let text = await res.text();

      if (res.status == 200) {
        info.token = (await res.json() as { [key : string] : string })["token"];
      }
      else if (text.includes("PASSWORD_DOES_NOT_MATCH")) {
        console.error("invalid password")
      }
      else if (text.includes("captcha-required")) {
        console.error("discord gave you a captcha for some reason so it didn't work try again later")
      }
      else {
        console.error(text);
        console.error("some error happened");
      }
    }

    if (info.token) {
      await client.login(info.token);
    }
    else {
      console.error("hyper death of the universe (couldn't get a token to log in with)");
    }
  }
});


async function run() {
  // await importx(`${dirname(import.meta.url)}/{events,commands}/**/*.{ts,js}`);
  // await client.login("");
}


void run();