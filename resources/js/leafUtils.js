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

function getFirstNotCompletedLeaf(specialistName) {
    var leafArray = getLeafArray(specialistName);
    for (let index = 0; index < leafArray.length; index++) {
        const leaf = leafArray[index];
        if (!leaf.isCompleted)
            return leaf;
    }
    console.log('Leaf with this number does not exist');
    return null;
}

function getLeafByNumber(number) {
    const specialists = ['odontologas', 'ginekologas', 'psichologas', 'pediatras'];

    for (let index = 0; index < specialists.length; index++) {
        const specialistName = specialists[index];

        var leafArray = getLeafArray(specialistName);
        for (let index = 0; index < leafArray.length; index++) {
            const leaf = leafArray[index];
            if (leaf.number == number)
                return leaf;
        }
    }
}

function allLeavesCompleted(specialistName) {
    var leafArray = getLeafArray(specialistName);
    for (let index = 0; index < leafArray.length; index++) {
        const leaf = leafArray[index];
        if (!leaf.isCompleted)
            return false;
    }
    return true;
}

function getEstTime(leaf) {
    var times = JSON.parse(localStorage.getItem(leaf.specialist + 'Times'));
    var count = 0;
    var elapsed = 0;
    for (let index = 0; index < times.length; index++) {
        const time = times[index];
        if (time.end != -1) {
            elapsed = elapsed + (time.end - time.start);
            count++;
        }
    }
    var multiplier = getLeafNumberInQueue(leaf);
    var average = (elapsed / count) * multiplier;
    var diff = new Date(average);
    var mins = diff.getMinutes();
    return mins == 0 ? '<0' : mins;
}

function getLeafNumberInQueue(leaf) {
    var number = 0;
    var leafArray = getLeafArray(leaf.specialist);
    for (let index = 0; index < leafArray.length; index++) {
        const currentLeaf = leafArray[index];
        if (currentLeaf.isCompleted)
            continue;
        if (currentLeaf.number == leaf.number)
            return number;
        number++;
    }
    return number;
}