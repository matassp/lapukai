window.onload = loadLightboard();

function loadLightboard() {
    const specialists = ['odontologas', 'ginekologas', 'psichologas', 'pediatras'];
    clearColumns(specialists);
    specialists.forEach(specialistName => {
        formColumn(specialistName);
    });
}

function clearColumns(specialists) {
    specialists.forEach(specialistName => {
        var element = document.getElementById(specialistName);
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    });
}

function formColumn(specialistName) {
    var element = document.getElementById(specialistName);
    var leafArray = getLeafArray(specialistName);
    var html = '';

    // If specialist has no leaves
    if (!leafArray || !leafArray.length || allLeavesCompleted(specialistName)) {
        html += formColumnHeader(specialistName);
        html += formEmptyMessage();
    }

    // If specialist has leaves
    else {
        html += formColumnHeader(specialistName);
        leafArray.forEach(leaf => {
            html += formCard(leaf);
        });
    }

    element.innerHTML += html;
}

function formColumnHeader(specialistName) {
    return '<h1 align="center">' + specialistName + '</h1>';
}

function formEmptyMessage() {
    html = '<div class="siimple-alert siimple-alert--primary" align="center">Eilė tuščia...</div>';
    return html;
}

function formCard(leaf) {
    if (leaf.isCompleted)
        return '';
    var firstNumber = getFirstNotCompletedLeaf(leaf.specialist).number;
    var timeMessage = (leaf.number == firstNumber) ? '<i>Aptarnaujama</i>' : getEstTime(leaf) + ' min';
    var template = '<div class="siimple-card"><div class="siimple-card-header" align="center">';
    template += '<div class="siimple-h5 siimple--mb-0">&#127811;</div></div>';
    template += '<div class="siimple-card-body" align="center"><div class="siimple--mt-3 siimple--mb-4" align="center">';
    template = template + '<div class="siimple-h1">' + leaf.number.toString() + '</div></div>';
    template = template + '<div class="siimple-h4">' + leaf.name + '</div>';
    template += '<div class="siimple-btn siimple-btn--grey siimple-btn--fluid siimple-btn--big siimple--text-bold">' + timeMessage + '</div>';
    template += '</div></div>';
    return template;
};