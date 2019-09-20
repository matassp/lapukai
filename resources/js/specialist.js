const specialists = {
    ODONTOLOGAS: 'odontologas',
    GINEKOLOGAS: 'ginekologas',
    PSICHOLOGAS: 'psichologas',
    PEDIATRAS: 'pediatras'
}

class Specialist {
    queue = [];
    nextNumber = 0;

    constructor(name) {
        this.name = name;
    }

    addLeaf(name) {
        this.queue.push({ name: name, number: this.nextNumber });
        this.nextNumber++;
        console.log(this.queue);
    }

    removeFirstFromQueue() {
        this.queue.shift();
    }
}