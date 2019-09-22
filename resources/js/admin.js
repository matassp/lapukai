var localStorage = window.localStorage;

function addLeafFromAdminPage() {
    var specialist = document.getElementById("specialistSelection").value;
    var clientName = document.getElementById("input").value;

    var leaf = new Leaf(specialist, clientName);
    leaf.pushToLocalStorage();
}

function loadExampleData() {
    var number = localStorage.getItem('number');
    if (number == null)
        localStorage.setItem('number', 1);

    fetchJSONFile('https://matassp.github.io/lapukai/resources/data/client-list.json', function (data) {
        data.forEach(element => {
            var newLeaf = new Leaf(element.specialist, element.name);
            newLeaf.pushToLocalStorage();
        });
    });
}

function fetchJSONFile(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send();
}

function clearLocalStorage() {
    console.log("localStorage cleared");
    localStorage.clear();
    localStorage.setItem('number', 1);
}