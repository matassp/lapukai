var localStorage = window.localStorage;

function addLeafFromAdminPage() {
    var specialist = document.getElementById("specialistSelection").value;
    var clientName = document.getElementById("input").value;

    var leaf = new Leaf(specialist, clientName);
    leaf.pushToLocalStorage();
}

function loadExampleData() {
    var leaves = [new Leaf('odontologas', 'Audrius'), new Leaf('ginekologas', 'Urte'), new Leaf('psichologas', 'Ignas'), new Leaf('pediatras', 'Jurga')]
    leaves.forEach(function (leaf) {
        leaf.pushToLocalStorage();
    })
}

function clearLocalStorage() {
    console.log("localStorage cleared");
    localStorage.clear();
    localStorage.setItem('number', 1);
}