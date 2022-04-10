class Train {
    constructor(name, address) {
        this.name=name;
        this.address=address;
        this.trainList=[];
        this.listTicket=[];

        if(typeof name === 'undefined') this.name='Unknown train';
        if(typeof address === 'undefined') this.address='Unknown address';
    }
}

let trainList = [];

function addTrain(name, address) {
    let train = new Train(name, address);
    trainList.push(train);
    return train;
}

function removeTrain(name, address) {
    for (const i in trainList)
        if(trainList[i].name === name && trainList[i].address === address){trainList.splice(+i,1);return 1;}
    return -1;
}

function findTrain(name, address) {
    for (const train of trainList)
        if(train.name === name && train.address === address)return train;
    return -1;
}

function editTrain(name,address,newName,newAddress) {
    if(findTrain(name, address)!==-1) {
        let train = findTrain(name, address);
        train.name = newName;
        train.address = newAddress;
        return train;
    }
    else return -1;
}

function getTrain() {
    console.log('\n\tTrain');
    for (const train of trainList) {
        console.group();
        console.log('\nTrain name:' + train.name + ', Train address:' + train.address);
        console.groupEnd();
    }
    console.log('\n');
    return trainList;
}

function maxtickets() {
    let largest = ''
    let count = 0
    trainList.forEach((item) => {
        if(largest.length < (item.listTicket).length) {
            largest = item.listTicket;
            count = trainList.indexOf(item)
        }
    });
    let smallest = largest
    let count2 = 0
    trainList.forEach((item) => {
        if(smallest.length > (item.listTicket).length) {
            smallest = item.listTicket;
            count2 = trainList.indexOf(item)
        }
    });

    console.log(`\nНайбільше продали квитків на ${count + 1} -ий потяг`,
        `Найменше продали квитків на ${count2 + 1} -ий потяг`)
}

// Експортуємо функції
exports.findTrain = findTrain;
exports.addTrain = addTrain;
exports.removeTrain = removeTrain;
exports.editTrain = editTrain;
exports.getTrain = getTrain;
exports.maxtickets = maxtickets