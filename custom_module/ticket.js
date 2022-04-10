class Ticket {
    constructor(name, prize) {
        this.name=name;
        this.prize=prize;

        if(typeof name === 'undefined') this.name='Unknown good';
    }
}

let ticketList = [];

function addTicket(name, prize) {
    let ticket = new Ticket(name, prize);
    ticketList.push(ticket);
    return ticket;
}

function removeTicket(name, prize) {
    for (const i in ticketList)
        if(ticketList[i].name === name && ticketList[i].prize === prize){ticketList.splice(+i,1);return 1;}
    return -1;
}

function findTicket(name, prize) {
    for (const good of ticketList)
        if(good.name === name && good.prize === prize)return good;
    return -1;
}

function editTicket(name,prize,newName,newPrize) {
    if(findTicket(name, prize)!==-1) {
        let ticket = findTicket(name, prize);
        ticket.name = newName;
        ticket.prize = newPrize;
        return ticket;
    }
    else return -1;
}

function getTicket() {
    console.log('\n\tTicket');
    for (const ticket of ticketList) {
        console.group();
        console.log('\nTicket name:' + ticket.name + ', Ticket prize:' + ticket.prize);
        console.groupEnd();
    }
    console.log('\n');
    return ticketList;
}

function buyingTicketForTrain(name,prize,train) {
    let ticket = new Ticket(name,prize);
    train.listTicket.push(ticket);
    return ticket;
}

function addToShop(name,prize,shop) {
    let good = new Ticket(name,prize);
    shop.listGood.push(good);
    return good;
}

function cancelTicketForTrain(name,prize,train) {
    for (const i in train.listTicket)
        if(train.listTicket[i].name === name && train.listTicket[i].prize === prize){train.listTicket.splice(+i,1);return 1;}
    return -1;
}

function changeOneTicketForAnother(name, prize, train1,train2) {
    for (const ticket of train1.listTicket)
        if(ticket.name === name && ticket.prize === prize){train2.listTicket.push(ticket);cancelTicketForTrain(name,prize,train1);return 1;}
    return -1;
}

// function moveGoodFromStorageToShop(name, prize, storage ,shop){
//     for (const good of storage.listTicket)
//         if(good.name === name && good.prize === prize){addToShop(name,prize,shop);cancelTicketForTrain(name,prize,storage);return 1;}
//     return -1;
// }
function moveGoodFromStorageToShop(train1, train2){
    return Math.max((train1.listTicket).length, (train2.listTicket).length)
}

// Експортуємо функції
exports.findGood                  = findTicket;
exports.addTicket                   = addTicket;
exports.removeTicket                = removeTicket;
exports.editTicket                  = editTicket;
exports.getTicket                   = getTicket;
exports.buyingTicketForTrain              = buyingTicketForTrain;
exports.addToShop                 = addToShop;
exports.cancelTicketForTrain         = cancelTicketForTrain;
exports.changeOneTicketForAnother      = changeOneTicketForAnother;
exports.moveGoodFromStorageToShop = moveGoodFromStorageToShop;
