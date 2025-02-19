class cellType {
    readonly markdown = new Enum(0);
    readonly script = new Enum(1);
}

class test {
    readonly test1 = new Enum(0);
    readonly test2 = new Enum(1);
}

class Enum {
    value : number
    constructor(value : number) {
        this.value = value;
    }
}

const enums = {
    cellType: new cellType(),
    test: new test()
}

export { enums }