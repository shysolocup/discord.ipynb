import * as discord from 'discord.js';

function stringFix(x : string) {
    return x.trim().replaceAll("/(\r\n|\n|\r)/gm", "");
}

/*

<table><tr><td><img src="https://github.com/shysolocup/discord.ipynb-assets/blob/main/discord.ipynb.png?raw=true" height=30 width=30></td><th>discord.ipynb</th><td>

Welcome to the chat room!

</td><td><details>
<summary>🛈</summary><sup><i>msg #2</i><br><i>edited: false<i></sup></details></td></tr><td><details><summary>📁</summary><br></details></td></table>

*/

export interface FakeMessageTemplate {
    avatarURL? : string
}

export class FakeMessage {
    avatarURL: string;

    constructor(data : FakeMessageTemplate) {
        this.avatarURL = data.avatarURL || "https://github.com/shysolocup/discord.ipynb-assets/blob/main/discord.ipynb.png?raw=true";
    }

    displayAvatarURL() {

    }
}

export class Message {
    ctx : discord.Message

    evalMemberAvatar() {
        let member = this.ctx.member;
        return (member && member.displayAvatarURL()) 
            ? member.displayAvatarURL() 
            : (member && member.user && member.user.displayAvatarURL()) 
            ? member.user.displayAvatarURL({
            }) 
            : "https://github.com/shysolocup/discord.ipynb-assets/blob/main/discord.ipynb.png?raw=true";
    }

    evalReply() {
        if (this.ctx.type == discord.MessageType.Reply) {
            let reply = this.ctx.reference;
            return `<sub><tr><td></td></tr></sub>`
        }
        else return ""
    }

    constructor(ctx: discord.Message) {
        this.ctx = ctx;

        let base = `
        <table>

        ${this.evalReply()}
        
        <tr><td>${this.evalMemberAvatar()}

        `
    }
}