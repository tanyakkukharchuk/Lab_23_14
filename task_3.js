let num = 9
function factorial(num) {
    if(num == 0 || num == 1) return 1;
    else if (num > 1) {
        return num * factorial(num - 1);
    }
}
console.log(factorial(num))
