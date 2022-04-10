let str = "This isn't, a (simple) sentence.";
// let separators = "!&;:\'\"\.\,?\(\)"
let words = str.split(" ");
// for (let i = words.length - 1; i >= 0; i--) {
//     let temp = words[i];
//     let len = temp.length - 1;
//     for(let j = 0; j< separators.length - 1; j++){
//         if(temp[0] === separators[j]){
//             words[i] =temp.slice(1, len)
//         }
//         if(temp[len] === separators[j]){
//             words[i] =temp.slice(0, len)
//         }
//     }
// }
console.log(words);
