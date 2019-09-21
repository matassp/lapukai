window.onload = switchSpecialist();

function switchSpecialist() {
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
        html += formEmptyRowFromTemplate();
    }
    // If specialist has leaves
    else
        leafArray.forEach(leaf => {
            html += formRowFromTemplate(leaf.number, leaf.name, leaf.isComplete);
        });

    element.innerHTML += html;
}

function formEmptyRowFromTemplate() {
    var template = '<div class="siimple-table-row">';
    template = template + '<div class="siimple-table-cell">Nėra Duomenų</div>';
    template = template + '<div class="siimple-table-cell">Nėra Duomenų</div>';
    template = template + '<div class="siimple-table-cell">Nėra Duomenų</div>';
    template += '</div>';
    return template;
}

function formRowFromTemplate(number, clientName, isComplete) {
    var isComplete = isComplete ? 'Taip' : 'Ne';
    var template = '<div class="siimple-table-row">';
    template = template + '<div class="siimple-table-cell">' + number.toString() + '</div>';
    template = template + '<div class="siimple-table-cell">' + clientName + '</div>';
    template = template + '<div class="siimple-table-cell">' + isComplete + '</div>';
    template += '</div>';
    return template;
};