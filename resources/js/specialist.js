window.onload = reloadTable();

function reloadTable() {
    var specialistName = document.getElementById("specialistSelection").value;
    clearTable();
    formTable(specialistName);
}

function clearTable() {
    var element = document.getElementById("tableBody");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function formTable(specialistName) {
    var element = document.getElementById('tableBody');
    var leafArray = getLeafArray(specialistName);
    var html = '';

    // If specialist has no leaves
    if (leafArray == null) {
        html += formEmptyRow();
    }
    // If specialist has leaves
    else
        leafArray.forEach(leaf => {
            html += formRow(leaf.number, leaf.name, leaf.isCompleted);
        });

    element.innerHTML += html;
}

function completeLeaf(number) {
    console.log(number);
    var specialistName = document.getElementById("specialistSelection").value;
    completeLeafByNumber(specialistName, number);
    var firstLeaf = getFirstNotCompletedLeaf(specialistName);
    if (firstLeaf != null)
        TimeKeeper.addStartTime(firstLeaf, Date.now());
    reloadTable();
}

function removeLeaf(number) {
    console.log(number);
    var specialistName = document.getElementById("specialistSelection").value;
    removeLeafByNumber(specialistName, number);
    reloadTable();
}

function formEmptyRow() {
    var template = '<div class="siimple-table-row">';
    template = template + '<div class="siimple-table-cell">Nėra Duomenų</div>';
    template = template + '<div class="siimple-table-cell">Nėra Duomenų</div>';
    template = template + '<div class="siimple-table-cell">Nėra Duomenų</div>';
    template = template + '<div class="siimple-table-cell">Nėra Duomenų</div>';
    template += '</div>';
    return template;
}

function formRow(number, clientName, isComplete) {
    var isComplete = isComplete ? 'Taip' : 'Ne';
    var template = '<div class="siimple-table-row">';
    template = template + '<div class="siimple-table-cell">' + number.toString() + '</div>';
    template = template + '<div class="siimple-table-cell">' + clientName + '</div>';
    template = template + '<div class="siimple-table-cell">' + isComplete + '</div>';
    template = template + '<div class="siimple-table-cell" align="center">' + formButtonGroup(number) + '</div></div>';
    return template;
};

function formButtonGroup(number) {
    var specialistName = document.getElementById("specialistSelection").value;
    var firstLeaf = getFirstNotCompletedLeaf(specialistName);
    var template = '<div class="siimple-btn-group">';
    if (firstLeaf)
        if (firstLeaf.number == number) {
            return template += '<div class="siimple-btn siimple-btn--success" onclick="completeLeaf(' + number + ')">Aptarnauti</div></div>';
        }
    template += '<div class="siimple-btn siimple-btn--success siimple-btn--disabled">Aptarnauti</div></div>';
    return template;
}