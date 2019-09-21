function getLeafArray(specialistName) {
    var leafArray = JSON.parse(localStorage.getItem(specialistName));
    var leafArray = assignLeafClass(leafArray);
    return leafArray;
}

function assignLeafClass(leafArray) {
    if (!leafArray) {
        console.log('Leaf array is empty');
        return;
    }

    var newLeafArray = [];
    leafArray.forEach(leaf => {
        var newLeaf = Object.assign(new Leaf, leaf);
        newLeafArray.push(newLeaf);
    });
    return newLeafArray;
}