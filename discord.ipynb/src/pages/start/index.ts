import { accounts, read, write } from '../../index.js';
import * as Image from '../../classes/Image.js';

export async function init() {
    let page = read();

    if (Object.keys(accounts).length > 0) {
        page.cells.forEach( (cell) => {
            if (cell.metadata["id"] == "accounts") {
                cell.source.forEach( (text, line) => {
                    if (text.includes("a little empty around here")) {

                        let spliced = [
                            "<table>\n",
                            "\n"
                        ]

                        Object.values(accounts).forEach( (account, i) => {

                            let avatar = "https://github.com/shysolocup/discord.ipynb-assets/blob/main/discord.ipynb.png?raw=true";
                            let name = "test";

                            let data = [
                                "<tr><td>",
                                "",
                                `${Image.init({
                                    src: avatar,
                                    size: 50
                                })}`,
                                "",
                                "</td><td>",
                                "",
                                `${name} (${account.id})`,
                                "",
                                "</td></tr>",
                                ""
                            ];

                            data.forEach( d => spliced.push(d + "\n"));
                        });

                        spliced.push("</table>\n");

                        spliced.reverse().forEach(s => cell.source.splice(line+1, 0, s));

                        cell.source[line] = "\n";

                        write(page);
                    }
                })
            }
        });
    }
}