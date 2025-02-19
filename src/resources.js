"use strict";
class Enum {
    constructor(enumname, name, value) {
        this.name = name;
        this.value = value;
        this.enumname = enumname;
        return Object.freeze(this);
    }
}
Enums.Enum = Enum;
module.exports = {
    Enums: Enums,
};
