class TimeKeeper {
    static addStartTime(leaf, startTime) {
        if (this.isNotInitialized(leaf))
            this.initLocalStorage(leaf);
        var time = {
            number: leaf.number,
            start: startTime,
            end: -1
        };
        const key = this.getKey(leaf);
        var times = JSON.parse(localStorage.getItem(key));
        times.push(time);
        localStorage.setItem(key, JSON.stringify(times));
    }

    static addEndTime(leaf, endTime) {
        const key = this.getKey(leaf);
        var times = JSON.parse(localStorage.getItem(key));
        var index = this.getIndex(leaf);
        times[index].end = endTime;
        localStorage.setItem(key, JSON.stringify(times));
        console.log('added end time');
    }

    static getIndex(leaf) {
        const key = this.getKey(leaf);
        var times = JSON.parse(localStorage.getItem(key));
        for (let index = 0; index < times.length; index++) {
            const time = times[index];
            if (time.number == leaf.number) {
                return index;
            }
        }
        console.log('time for this leaf was not found');
    }

    static getKey(leaf) {
        return leaf.specialist + 'Times';
    }

    static isNotInitialized(leaf) {
        var times = localStorage.getItem(this.getKey(leaf));
        return !times;
    }

    static initLocalStorage(leaf) {
        console.log('initialized')
        localStorage.setItem(leaf.specialist + 'Times', '[]');
    }
}