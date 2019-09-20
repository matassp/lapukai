const specialists = {
    ODONTOLOGAS: 'odontologas',
    GINEKOLOGAS: 'ginekologas',
    PSICHOLOGAS: 'psichologas',
    PEDIATRAS: 'pediatras'
}

class specialist {
    queue = [];
    constructor(name) {
        this.name = name
    }

    addLeaf(name) {
        console.log(name)
    }
}

switch (specialist) {
    case specialists.ODONTOLOGAS:
    // Do something for summer
    case specialists.GINEKOLOGAS:
    //Do something for winter
    case specialists.PSICHOLOGAS:
    //Do something for spring
    case specialists.PEDIATRAS:
    //Do something for autumn
}