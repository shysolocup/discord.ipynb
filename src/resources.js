"use strict";
class CellType {
    constructor() {
        this.Markdown = [0];
        this.Script = [1];
    }
}
class EnumsBase {
    constructor() {
        this.CellType = new CellType();
    }
}
const Enums = Object.freeze(new EnumsBase());
module.exports = {
    Enums: Enums,
};
