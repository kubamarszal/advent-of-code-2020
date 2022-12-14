const passwords = require('./day02-input.js');

const parsePolicy = (policy) => {
    const [minmax, letter] = policy.split(' ');
    const [min, max] = minmax.split('-');
    return {min, max, letter};
}
const validateOldPolicy = (policy, passObj) => {
    const {min, max, letter} = parsePolicy(policy);
    if(passObj[letter] >= min && passObj[letter] <= max)
        return true;
    return false;

}

const validateNewPolicy = (policy, password) => {
    let {min, max, letter} = parsePolicy(policy);
    min--; max--;
    
    if(password[min] === password[max])
        return false;
    if(password[min] === letter || password[max] === letter) 
        return true;
    return false;
}

const main = () => {
    let oldPolicyCount = 0;
    let newPolicyCount = 0;
    passwords.forEach(password => {
        const passObj = {};
        const [policy, pass] = password.split(': ');

        for(let i=0;i<pass.length;i++) {
            if(passObj[pass[i]])
                passObj[pass[i]]++;
            else
                passObj[pass[i]]=1;
        }
        oldPolicyCount += validateOldPolicy(policy, passObj) ? 1 : 0;
        newPolicyCount += validateNewPolicy(policy, pass) ? 1 : 0;
    })

    console.log('Valid passes according to the old policy: ' + oldPolicyCount)
    console.log('Valid passes according to the new policy: ' + newPolicyCount)
}

main();