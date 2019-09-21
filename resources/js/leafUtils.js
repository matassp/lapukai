function getLeafArray(specialistName) {
    var leafArray = JSON.parse(localStorage.getItem(specialistName));
    var leafArray = assignLeafClassToArray(leafArray);
    return leafArray;
}

function assignLeafClassToArray(leafArray) {
    if (!leafArray) {
        console.log('Leaf array is empty');
        return;
    }

    var newLeafArray = [];
    leafArray.forEach(leaf => {
        var newLeaf = assignLeafClass(leaf);
        newLeafArray.push(newLeaf);
    });
    return newLeafArray;
}

function assignLeafClass(leaf) {
    return Object.assign(new Leaf, leaf);
}

function saveLeafArray(specialistName, leafArray) {
    leafArray = JSON.stringify(leafArray);
    localStorage.setItem(specialistName, leafArray);
}

function removeLeafByNumber(specialistName, number) {
    var leafArray = getLeafArray(specialistName);
    var index = getIndexByNumber(specialistName, number);
    console.log(leafArray);
    leafArray.splice(index, 1);
    console.log(leafArray);
    saveLeafArray(specialistName, leafArray);
}

function completeLeafByNumber(specialistName, number) {
    var leafArray = getLeafArray(specialistName);
    var index = getIndexByNumber(specialistName, number);
    leafArray[index].complete();
    saveLeafArray(specialistName, leafArray);
}

function getIndexByNumber(specialistName, number) {
    var leafArray = getLeafArray(specialistName);
    for (let index = 0; index < leafArray.length; index++) {
        const leaf = leafArray[index];
        if (leaf.number == number)
            return index;
    }
    console.log('Leaf with this number does not exist');
    return null;
}