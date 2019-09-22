window.onload = init();

function init() {
    document.getElementById("input").focus();
}

function getLeaf() {
    var number = document.getElementById("input").value;
    var leaf = getLeafByNumber(parseInt(number));
    var element = document.getElementById("manipulation").firstElementChild;
    if (leaf) {
        element.innerHTML = formLeaf(leaf);
    }
    else {
        element.innerHTML = '<h3 align="center">Lapukas nerastas...</h3>';
    }
}

function formLeaf(leaf) {
    if (leaf.isCompleted)
        return '<h3 align="center">Jūs esate aptarnautas</h3>';
    var element = document.getElementById("manipulation").firstElementChild;
    element.id = leaf.specialist;
    var index = getIndexByNumber(leaf.specialist, leaf.number);
    var timeMessage = (index == 0) ? '<i>Aptarnaujama</i>' : "12:15";
    var template = '<h1 align="center">';
    template = template + leaf.specialist + '</h1>';
    template += '<div class="siimple-card"><div class="siimple-card-header" align="center">';
    template += '<div class="siimple-h5 siimple--mb-0">&#127811;</div></div>';
    template += '<div class="siimple-card-body" align="center"><div class="siimple--mt-3 siimple--mb-4" align="center">';
    template = template + '<div class="siimple-h1">' + leaf.number.toString() + '</div></div>';
    template = template + '<div class="siimple-h4">' + leaf.name + '</div>';
    template += '<div class="siimple-btn siimple-btn--grey siimple-btn--fluid siimple-btn--big siimple--text-bold">' + timeMessage + '</div>';
    template += '</div></div>';
    return template;
}