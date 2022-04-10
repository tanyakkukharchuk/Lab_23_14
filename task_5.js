let month = 11
let year = 2004
function DaysInMonth(month, year){
    let mon30 = [1, 3, 5, 7, 8, 10, 12]
    for(let i =0; i< mon30.length; i++){
    if(month === 2 && year %4 ===0) return 29;
    else if(mon30.includes(month)) return 31;
    else if(!mon30.includes(month)) return 30;
    else return 28
    }
}
console.log(DaysInMonth(month, year))