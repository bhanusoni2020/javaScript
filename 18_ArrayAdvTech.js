/*
Array useReducer() method
Syntax
Array.reduce((accumulator, currenValue)=> [initialValue])
Example

const num = [10,20,30];
const sum = num.reduce((acc, curr)=> {
    return acc + curr;
}, 0);
console.log(sum);

// Slice vs Splice
const fruits = ['apple', 'Banana', 'cherry', 'date'];
const slicedFruits = fruits.slice(1,3);
console.log(slicedFruits);
console.log(fruits);


// splice
const fruits2 = ['apple', 'banana', 'cherry',' date'];

const slicedFruits = fruits2.splice(1,3);
console.log(slicedFruits);
console.log(fruits2);


// Concat
const arr1 = [1,2,3,4];
const arr2 = [4,5,6,7];

console.log(arr1.concat(arr2));

// Flat

const nestedArray = [1, 2, [3, 4], [5, 6,[7,8]]];
const flatArr = nestedArray.flat();
console.log(flatArr);
console.log(nestedArray.flat(2));
*/



// spread operator 

const arrr1 = [1,2,3];
const arr2 = [4,5,6];

console.log([...arrr1,...arr2])


