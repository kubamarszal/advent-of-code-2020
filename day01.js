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

    array.forEach(item => {
        const diff = sum - item;
        if(obj[diff])
            console.log(`Two numbers: ${item} ${diff}, multiplied: ${item*diff}`);
    })

    let left = 0;
    let right = array.length - 1;
    let t = true;

    while(t) {
        const l = array[left];
        const r = array[right];
        const diff = sum - (l + r);
        const x = obj[diff];

        if(x) {
            console.log('hey ', l, diff, r);
            console.log('multiplied ', + l*diff*r);
            t = false;
        }
        else {
            left = randomElement();
            right = randomElement();
        }
    }
}

main()