var index = 0;
var localStorage = window.localStorage;
localStorage.setItem('nextIndex', "0")

function addLeaf() {
    var e = document.getElementById("specialistSelection");
    var specialist = e.options[e.selectedIndex].text;
    var name = document.getElementById("input").value;
    var leaf = new Leaf(name, specialist);
    window.localStorage.setItem('leaf', JSON.stringify(leaf))
}

class Leaf {
    constructor(name, specialist) {
        this.name = name;
        this.specialist = specialist;
        this.number = localStorage.getItem('nextIndex');
        increaseIndex();
    }
}

function increaseIndex() {
    index++;
    localStorage.setItem('nextIndex', index.toString())
}

function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'my_data.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function init() {
    console.log("aaaa");
    loadJSON(function (response) {
        var actual_JSON = JSON.parse(response);
        console.log(response);
    });

    var localStorage = window.localStorage;

    localStorage.clear();

    var marius = {
        specialist: "odontologas",
        name: "Marius",
        number: "001"
    }
    var antanas = {
        specialist: "odontologas",
        name: "Antanas",
        number: "022"
    }
    var ignas = {
        specialist: "psichologas",
        name: "Ignas",
        number: "333"
    }
    var jurgis = {
        specialist: "pediatras",
        name: "Jurgis",
        number: "100"
    }

    localStorage.setItem('marius', JSON.stringify(marius))
    localStorage.setItem('antanas', JSON.stringify(antanas))
    localStorage.setItem('ignas', JSON.stringify(ignas))
    localStorage.setItem('jurgis', JSON.stringify(jurgis))
    console.log(localStorage.getItem('jurgis'))
}