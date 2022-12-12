const { array } = require('./day01-input')

const main = () => {
    const obj = {}
    const sum = 2020
    array.forEach(item => {
        if(obj[item] === undefined)
            obj[item] = true;
    });

    array.forEach(item => {
        const diff = sum - item;
        if(obj[diff])
             console.log(item*diff)
    })
}

main()