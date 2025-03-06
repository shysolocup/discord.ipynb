import { accounts, read,  } from '../../index.js';

export async function init() {
    let page = read();

    page.cells.forEach( (cell) => {
        if (cell.metadata["id"] == "accounts") {
            cell.source.addLine("a");
        }
    });
}