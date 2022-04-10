const mod = require('custom_module');

function printTicket(st) {
    for (const item of st.listTicket) {
        console.log('\n' + item.name+ '   ' + item.prize);
    }
}

// Додавання пасажирів
let s1 = mod.addPassanger("Passanger_1", "Test address 1");
let s2 = mod.addPassanger("Passanger_2", "Test address 2");
let s3 = mod.addPassanger("Passanger_3", "Test address 3");

// Список пасажирів
mod.getPassanger();

// Видалення пасажирів
console.log("Видалення пасажира: Passanger_2");
mod.removePassanger("Passanger_2", "Test address 2");

// Список пасажирів
mod.getPassanger();

// Зміна пасажира
console.log("Зміна пасажира: рassanger_3");
mod.editPassanger("Passanger_3", "Test address 3", "New passanger name", "New address");

// Список пасажирів
mod.getPassanger();

// Пошук пасажирів
let passanger1 = mod.findPassanger("Passanger_1", "Test address 1");
console.log(`Пошук пасажира Passanger_1: ${passanger1 !== -1 ? "знайдено" : "не знайдено"}`);
let passanger2 = mod.findPassanger("Passanger_7", "Test address 7");
console.log(`Пошук пасажира Passanger_7: ${passanger2 !== -1 ? "знайдено" : "не знайдено"}`);

////////////////////////////////////////////////////////////////////////////////////

// Додавання потягу
let st1 = mod.addTrain("Train_1", "Address 1");
let st2 = mod.addTrain("Train_2", "Address 2");
let st3 = mod.addTrain("Train_3", "Address 3");
let st4 = mod.addTrain("Train_4", "Address 4")
// Список потягів
mod.getTrain();

// Видалення потягів
console.log("Видалення потягу: Train_4");
mod.removeTrain("Train_4", "Address 4");

// Список потягів
mod.getTrain();

// Зміна потягу
console.log("Зміна потягу: Train_3");
mod.editTrain("Train_3", "Address 3", "New train", "New address");

// Список потягів
mod.getTrain();

// Пошук потягів
let train1 = mod.findTrain("Train_1", "Address 1");
console.log(`Пошук потягу Train_1: ${train1 !== -1 ? "знайдено" : "не знайдено"}`);
let train2 = mod.findTrain("Train_7", "Address 7");
console.log(`Пошук потягу Train_7: ${train2 !== -1 ? "знайдено" : "не знайдено"}`);

////////////////////////////////////////////////////////////////////////////////////

// Додавання квитків
mod.addTicket("Львів-Рівне", 30);
mod.addTicket("Ковель-Одеса", 50);
mod.addTicket("Здолбунів-Львів", 78);

// Список квитків
mod.getTicket();

// Видалення квитків
console.log("Видалення квитка: Здолбунів-Львів");
mod.removeTicket("Здолбунів-Львів", 78);

// Список квитків
mod.getTicket();

// Зміна квитка
console.log("Зміна квитка: Львів-Рівне");
mod.editTicket("Львів-Рівне", 30, "Львів-Здолбунів", 45);

// Список квитків
mod.getTicket();

// Пошук квитків
let ticket1 = mod.findTicket("Львів-Здолбунів", 45);
console.log(`Пошук квитка Львів-Здолбунів: ${ticket1 !== -1 ? "знайдено" : "не знайдено"}`);
let ticket2 = mod.findTicket("Рівне-Одеса", 90);
console.log(`Пошук квитка Рівне-Одеса: ${ticket2 !== -1 ? "знайдено" : "не знайдено"}`);

//Покупка квитка на потяг
st1.listTicket=[{name:"Львів-Київ", prize:56}, {name:"Одеса-Рівне", prize:56},
    {name:"Одеса-Львів", prize:74}]
mod.buyingTicketForTrain("Ковель-Одеса" ,12 ,st1);
console.log('\nПокупка квитка на перший потяг (Ковель-Одеса): ');
printTicket(st1);

//Скасування покупки квитка на потяг
console.log('\nСкасування покупки квитка на перший потяг (Одеса-Рівне): ');
mod.cancelTicketForTrain("Одеса-Рівне", 56, st1);
printTicket(st1);

//Заміна квитка із одного потяга на інший
console.log('\nЗаміна квитка із одного потяга на інший:');
console.log('\nПерший потяг до заміни: ');
printTicket(st1);
console.log('\nПерший потяг після заміни: ');
mod.changeOneTicketForAnother("Ковель-Одеса",12,st1,st2);
printTicket(st1);
console.log('\nДругий потяг після заміни: ');
printTicket(st2);

//console.log(mod.moveGoodFromStorageToShop(st1,st2))
mod.maxtickets()
//console.log((st2.listTicket))
// //Доставка з складу до магазину
// console.log('\nДоставка товару з складу до магазину: \nАсортимент магазину:');
// mod.moveGoodFromStorageToShop("Апельсин", 12, st2,s1);
// printTicket(s1);