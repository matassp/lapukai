function switchSpecialist() {
    var specialistName = document.getElementById("specialistSelection").value;
    formTable(specialistName);
}

function formTable(specialistName) {
    var element = document.getElementById('tableBody')
    element.innerHTML += formRowFromTemplate(1, 'Antanas', true)
}

function formRowFromTemplate(number, clientName, isComplete) {
    var isComplete = isComplete ? 'Taip' : 'Ne';
    var template = '<div class="siimple-table-row">';
    template = template + '<div class="siimple-table-cell">' + number.toString() + '</div>';
    template = template + '<div class="siimple-table-cell">' + clientName + '</div>';
    template = template + '<div class="siimple-table-cell">' + isComplete + '</div>';
    template += '</div>';
    return template;
}