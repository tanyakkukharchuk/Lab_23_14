class Passanger {
    constructor(name, address) {
        this.name = name;
        this.address = address;
        this.listTicket = [];

        if(typeof name === 'undefined') this.name = 'Unknown passanger';
        if(typeof address === 'undefined') this.address = 'Unknown address';
    }
}

let passangerList = [];

function addPassanger(name, address) {
    let passanger = new Passanger(name, address);
    passangerList.push(passanger);
    return passanger;
}

function removePassanger(name, address) {
    for (const i in passangerList)
        if(passangerList[i].name === name && passangerList[i].address === address){passangerList.splice(+i,1);return 1;}
    return -1;
}

function findPassanger(name, address) {
    for (const passanger of passangerList)
        if(passanger.name === name && passanger.address === address)return passanger;
    return -1;
}

function editPassanger(name,address,newName,newAddress) {
    if(findPassanger(name, address)!==-1) {
        let passanger = findPassanger(name, address);
        passanger.name = newName;
        passanger.address = newAddress;
        return passanger;
    }
    else return -1;
}

function getPassanger() {
    console.log('\n\tPassanger');
    for (const passanger of passangerList) {
        console.group();
        console.log('\nPassanger name:' + passanger.name + ', Passanger address:' + passanger.address);
        console.groupEnd();
    }
    console.log('\n');
    return passangerList;
}


// Експортуємо функції
exports.findPassanger = findPassanger;
exports.addPassanger = addPassanger;
exports.removePassanger = removePassanger;
exports.editPassanger = editPassanger;
exports.getPassanger = getPassanger;