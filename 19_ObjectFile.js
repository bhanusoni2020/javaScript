// const person = {
//     name: "Bhanu",
//     age: "21",
//     isTrainer: "true",
// };
// console.log(person.name);
// console.log(person["age"]);

// // Object Add 
// person.location = "India";
// console.log(person);

// // Object Updates

// person.age = 23;
// console.log(person);

// // Delete 
// delete person.isTrainer;
// console.log(person);

// Nested Object 

// const person = {
//     name: "Bhanu",
//     age: "21",
//     isTrainer: "true",
//     location: {
//         city: "Noida",
//         state: "Delhi",
//     },
//     college: {
//         Cource: "B tech",
//         Branch: "AIML",
//         Technical: "true",
//         nontechnical: "false",
//     },
// };
// console.log(person.college.Branch);

// Object Method 

// const person = {
//     name: "Bhanu",
//     age: "21",
//     isTrainer: "true",
//     location: {
//         city: "Noida",
//         state: "Delhi",
//     },
//     getName: function () {
//         return this.name;
//     },
// };
// // console.log(person.getName());



// // Loop in object 
// // for(let key in person){
// //     console.log(key, person[key]);
// // }

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));


// Object Destructuring

// const person = {
//     name: "Bhanu",
//     age: "21",
//     isTrainer: "true",
//     location: {
//         city: "Noida",
//         state: "Delhi",
//     },
// };

// const {name, age, isTrainer} = person;
// console.log(name, age,isTrainer);
// const {city, state} = person.location;
// console.log(city, state);

// Object spread Operator 
// const person = {
//     name: "Bhanu",
//     age: "21",
//     isTrainer: "true",
// };
// const person2 = {
    //     ...person,
    //     location: "pan India",
    // };
    // console.log(person2);
    
    
    
//     const person = {
//         name: "Bhanu",
//         age: "21",
//         isTrainer: "true",
//         location: {
//             city: "Noida",
//             state: "Delhi",

//         },
//     };
// console.log(person.location?.city);
// console.log(person.location?.country);

// Nullish coolescing operator(??)

    const person = {
        name: "Bhanu",
        age: "21",
        isTrainer: "true",
        location: {
            city: "Noida",
            state: "Delhi",

        },
    };
    const city = 0 ?? "unknown";
    console.log(city);