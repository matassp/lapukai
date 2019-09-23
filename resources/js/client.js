window.onload = init();

function init() {
    document.getElementById("input").focus();
}

function getLeaf() {
    var number = document.getElementById("input").value;
    var leaf = getLeafByNumber(parseInt(number));
    var element = document.getElementById("manipulation").firstElementChild;
    if (leaf) {
        formLeaf(leaf);
        if (!leaf.isCompleted)
            updateTime();
    } else {
        element.innerHTML = '<h3 align="center">Lapukas nerastas...</h3>';
    }
}

function updateTime() {
    var number = document.getElementById("input").value;
    var element = document.getElementById("time");
    var leaf = getLeafByNumber(parseInt(number));
    var index = getFirstNotCompletedLeaf(leaf.specialist).number;
    element.innerHTML = (index == leaf.number) ? '<i>Aptarnaujama</i>' : getEstTime(leaf) + ' min';
    console.log('updated');
    setTimeout(updateTime, 5000);
}

function formLeaf(leaf) {
    var element = document.getElementById("manipulation").firstElementChild;
    if (leaf.isCompleted) {
        element.innerHTML = '<h3 align="center">Jūs esate aptarnautas...</h3>';
        return;
    }
    element.id = leaf.specialist;
    var index = getFirstNotCompletedLeaf(leaf.specialist).number;
    var timeMessage = (leaf.number == index) ? '<i>Aptarnaujama</i>' : getEstTime(leaf) + ' min';
    var template = '<h1 align="center">';
    template = template + leaf.specialist + '</h1>';
    template += '<div class="siimple-card"><div class="siimple-card-header" align="center">';
    template += '<div class="siimple-h5 siimple--mb-0">&#127811;</div></div>';
    template += '<div class="siimple-card-body" align="center"><div class="siimple--mt-3 siimple--mb-4" align="center">';
    template = template + '<div class="siimple-h1">' + leaf.number.toString() + '</div></div>';
    template = template + '<div class="siimple-h4">' + leaf.name + '</div>';
    template += '<div class="siimple-btn siimple-btn--grey siimple-btn--fluid siimple-btn--big siimple--text-bold" id="time">' + timeMessage + '</div>';
    template += '</div></div>';
    element.innerHTML = template;
}