// for
// Syntex
// for(let i = 0; i<10; i++){
//     console.log(i);
// }

// let table = [2,4,6,8,10]
// for( let s in table){
//     console.log(table[s]);
// }


let student = [
    {name: "Alice", age: 20},
    {name: "Bob", age: 22},
    {name: "Charlie", age: 21},
]
for( let s in student){
    console.log(student[s].name+" is "+student[s].age+" years  old");
}