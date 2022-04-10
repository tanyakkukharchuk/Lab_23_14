let symbols = [1, 3, 1, 4, 2, 2, 1, 3, 2, 2, 7];
function RepeatNumber(array) {
    let obj = [];
    let sum = 0;
    let vvv = 0;
    array.forEach(item => {
      if (obj[item] != undefined) ++obj[item];
      else obj[item] = 1;
      console.log(obj[item])
    });
    for (let j in obj) {
       if ( obj[j] > sum ) sum = obj[j], vvv = j;
    }
    return vvv;
}
console.log(RepeatNumber(symbols))