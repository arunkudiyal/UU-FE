// print
// console.log('JS works!')

// Data Types

// 1. Number
// let container = 100;
// let container2 = new Number(200)
// console.log(container2);

// console.log(container)
// console.log( typeof(container) )

// // 2. String
// container = "My Container"
// console.log(container)
// console.log( typeof(container) )

// // Boolean
// container = true
// console.log(container)
// console.log( typeof(container) )

// // Null
// container = null
// console.log(container)
// console.log( typeof(container) )

// // Undefined
// container = undefined
// console.log(container)
// console.log( typeof(container) )
// Symbol

// ES6 --> let, var, const
// let -> local + mutable
// var -> global + mutable
// const -> local + immutable
// var value1 = 10
// if( value1 >= 50 ) {
//     const value2 = "It is greater or equal"
//     console.log(value2)
// } else {
//     const value2 = "It is smaller"
//     console.log(value2)
// }
// console.log(value1)
// console.log(value2)

// NON-PRIMITIVA DT

// 1. Arrays - [  ]
// Array is a collection of similar DT
// int[] arr = {}

// let nums2 = new Array()
// console.log(nums2);

// console.log(nums[1]);
// console.log(nums[5][1]);

// nums1[2] = 35
// console.log(nums1);

// // nums1 = []
// let nums2 = [...nums1];

// const nums1 = [40, 50, 10, 20, 30];
// console.log(nums1);

// nums1.sort()
// console.log(nums1);

// nums1.push(100)
// console.log(nums1);

// nums1.pop()
// console.log(nums1);

// nums1.splice(0, 2)
// console.log(nums1);

// 2. JS Functions - (  )
// function add(num1, num2) {
//     if( typeof(num1) == 'number' && typeof(num2) == 'number' ) {
//         return num1 + num2
//     } else {
//         return 'Cannot add'
//     }
// }

// let functionObject = add
// console.log(functionObject);

// console.log( add(10, 20) );
// console.log( add("My", "String") );
// console.log( add(false, false) );

// // const funcName = () => { ... }
// const product = (num1, num2) => {
//     if(typeof(num1) == 'number' && typeof(num2) == 'number') {
//         return num1 * num2
//     } else {
//         return 'Cannot product'
//     }
// };
// console.log( product(10, 20) );
// console.log( product(true, 20) );
// console.log( product(10, "MyString") );

// const setTimeoutHandler = () => {
//     console.log('setTimeout')
// }
// setTimeout(setTimeoutHandler, 2000)

// setTimeout( () => {
//     console.log('setTimeout')
// }, 2000)


// 3. JS Objects - {  }

const person = {
    // key: value
    name: 'Person One',
    age: 42,
    designation: 'SDE 1',
    comapny: 'Google',
    isEmployed: false,
    hobbies: ['cricket', 'books', 'hike'],
    address: {
        city: 'Dehradun',
        country: 'India'
    }
}
console.log(person);

const myJSON = JSON.stringify(person)
console.log(myJSON)

const myObj = JSON.parse(myJSON)
console.log(myObj);



