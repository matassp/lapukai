var localStorage = window.localStorage;
window.onload = focusOnLeafCreation();

function focusOnLeafCreation() {
    document.getElementById("input").focus();
}

function addLeafFromAdminPage() {
    var specialist = document.getElementById("specialistSelection").value;
    var clientName = document.getElementById("input").value;
    if (clientName == '') {
        showMessage('Įveskite vardą...', false, 'createdMessage');
        return;
    }

    var leaf = new Leaf(specialist, clientName);
    leaf.pushToLocalStorage();
    showMessage('Užregistruota sėkmingai...', true, 'createdMessage');
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
        if (httpRequest.status === 404) {
            var element = document.getElementById('ajaxMessage');
            element.innerHTML = '';
            showMessage('Nepavyko nuskaityti lankytojų duomenų...', false, 'ajaxMessage');
            return;
        }
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            var data = JSON.parse(httpRequest.responseText);
            if (callback) callback(data);
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

function showMessage(text, success, id) {
    var element = document.getElementById(id);
    var div = document.createElement("div");
    div.classList.add('siimple-alert');
    var colorClass = success ? 'siimple-alert--success' : 'siimple-alert--error';
    div.classList.add(colorClass);
    div.innerText = text;
    element.appendChild(div);
    setTimeout(function () {
        div.remove();
    }, 1000);
}