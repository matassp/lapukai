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
    if (leafArray == null) {
        html += formColumnHeader(specialistName);
    }
    // If specialist has leaves
    else {
        html += formColumnHeader(specialistName);
        leafArray.forEach(leaf => {
            html += formCard(leaf.number, leaf.name, leaf.isCompleted);
        });
    }

    element.innerHTML += html;
}

function formColumnHeader(specialistName) {
    return '<h1 align="center"><i>' + specialistName + '</i></h1>';
}

function formCard(number, clientName, isComplete) {
    var isComplete = isComplete ? 'Taip' : 'Ne';
    var template = '<div class="siimple-card"><div class="siimple-card-header" align="center">';
    template += '<div class="siimple-h5 siimple--mb-0"></div></div>';
    template += '<div class="siimple-card-body" align="center"><div class="siimple--mt-3 siimple--mb-4" align="center">';
    template = template + '<div class="siimple-h1">' + number.toString() + '</div></div>';
    template = template + '<div class="siimple-h4">' + clientName + '</div>';
    template += '<div class="siimple-btn siimple-btn--success siimple-btn--fluid siimple-btn--big siimple--text-bold">12:35</div>';
    template += '</div></div>';
    return template;
};