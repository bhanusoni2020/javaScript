// Heap memory

let persoon = {
    name : "Bhanu",
    age : 25,
}
let person1 = persoon
person1.name = "Soni",
console.log(person1.name)
console.log(persoon.name)

// stack memory

let a = 10
let b= a

b = 20

console.log(a)
console.log(b)


