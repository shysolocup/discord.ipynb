import { accounts, read } from '../../index.js';

export async function init() {
    let page = read();

    page.cells.forEach( (cell) => {
        cell.source.forEach( (line) => {

        })
    });

    console.log(accounts);
}