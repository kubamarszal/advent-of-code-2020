const { array } = require('./day01-input')

const randomElement = () => {
    return Math.floor(Math.random()*array.length);
}

const main = () => {
    const obj = {}
    const sum = 2020
    array.sort((a, b) => a - b);

    array.forEach(item => {
        if(obj[item] === undefined)
            obj[item] = true;
    });

    let t = true;
    array.forEach(item => {
        const diff = sum - item;
        if(obj[diff] && t) {
            console.log(`Two numbers: ${item} ${diff}, multiplied: ${item*diff}`);
            t = false;
        }
    })

    let left = 0;
    let right = array.length - 1;
    t = true;

    while(t) {
        const l = array[left];
        const r = array[right];
        const diff = sum - (l + r);
        const x = obj[diff];

        if(x) {
            console.log(`Three numbers: ${l} ${r} ${diff}, multiplied: ${l*r*diff}`);
            t = false;
        }
        else {
            left = randomElement();
            right = randomElement();
        }
    }
}

main()