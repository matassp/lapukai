// Leaf class that controlls the total amount of leaves by specialist in localStorage
// Leaf class is able to serialize itself into localStorage
class Leaf {
    constructor(specialist, name) {
        // Exit if arguments are missing
        if (specialist == null || name == null)
            return;
        this.specialist = specialist;
        // Create new field if specialist doesnt exist yet
        if (localStorage.getItem(specialist) == null)
            this.createLocalStorageFields()
        this.name = name;
        this.isCompleted = false;
        this.number = this.getNumber();
        this.increaseNumber()
    }

    getNumber() {
        return localStorage.getItem('number');
    }

    createLocalStorageFields() {
        console.log('new specialist created')
        localStorage.setItem(this.specialist, '[]');
    }

    increaseNumber() {
        var previousNumber = parseInt(this.getNumber());
        var nextNumber = ++previousNumber;
        localStorage.setItem('number', nextNumber)
    }

    complete() {
        this.isCompleted = true;
        console.log('completed');
    }

    pushToLocalStorage() {
        var leafArray = JSON.parse(localStorage.getItem(this.specialist));
        leafArray.push(this);
        localStorage.setItem(this.specialist, JSON.stringify(leafArray));
    }
}