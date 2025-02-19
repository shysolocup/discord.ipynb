type EnumItem = {
    name : string;
    enums : { [key : string]: EnumValue };
}

class EnumItemBase {
    name : string;
    enums : { [key : string]: EnumValue } = {};
    
    constructor(name : string) {
        this.name = name;

        return this;
    }
}

type EnumValue = {
    name : string,
    value : number,
    parent : EnumItem
}


class EnumValueBase {
    name : string;
    value : number;
    parent : EnumItem;

    constructor(name : string, value : number, parent : EnumItem) {
        this.name = name;
        this.value = value;
        this.parent = parent;
    }
}

/*

new EnumList({
    CellType: [
        "Markdown",
        "Python"
    ]
})

*/


class EnumsBase {
    enums: { [key : string] : EnumItem } = {};

    constructor( enums : { [key: string] : string[] } ) {
        for (let [key, value] of Object.entries(enums)) {
            enums[key] = new EnumItemBase(key) as EnumItem;

            value.forEach( (v, i) => {
                
            })
        }

        return Object.freeze(this);
    }
}


const Enums = Object.freeze(
    new Proxy(
        new EnumsBase({

        }),

        {

        }
    )
);

module.exports = { 
    Enums: Enums,  

};