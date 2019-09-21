// Leaf class that controlls the total amount of leaves by specialist in localStorage
// Leaf class is able to serialize itself into localStorage
class Leaf {
    constructor(specialist, name) {
        // Exit if arguments are missing
        if (specialist == null || name == null)
            return;
        this.name = name;
        this.isCompleted = false;
        this.specialist = specialist;
        this.number = this.getNumber();
        this.increaseNumber()
    }

    getNumber() {
        if (localStorage.getItem(this.specialist + 'Number') != null)
            return localStorage.getItem(this.specialist + 'Number');
        this.createLocalStorageFields(this.specialist);
        return 0;
    }

    createLocalStorageFields() {
        console.log('new specialist created')
        localStorage.setItem(this.specialist, '[]');
        localStorage.setItem(this.specialist + 'Number', 0);
    }

    increaseNumber() {
        var previousNumber = parseInt(this.getNumber());
        var nextNumber = ++previousNumber;
        localStorage.setItem(this.specialist + 'Number', nextNumber)
    }

    complete() {
        console.log('completed')
        this.isCompleted = true;
    }

    pushToLocalStorage() {
        var leafArray = JSON.parse(localStorage.getItem(this.specialist));
        leafArray.push(this);
        localStorage.setItem(this.specialist, JSON.stringify(leafArray));
    }
}