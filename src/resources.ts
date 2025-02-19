type Enum = {
    [index : number]: number
}


class CellType {
    readonly Markdown: Enum = [0];
    readonly Script: Enum = [1];
}

class EnumsBase {
    readonly CellType : CellType = new CellType()
}


const Enums = Object.freeze(new EnumsBase())


module.exports = { 
    Enums: Enums,  
};