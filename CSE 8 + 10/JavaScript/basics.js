// JS :-
// 1. JS is NOT compiled. JS is INTERPRETED
// 2. JS is dynmaically typed
// 3. vvImp :- Anything & everything in JS are OBJECTS

// console.log('Welcome to .js')
// console.error('This is an error')
// console.war('This is a warning')

// alert('THIS IS AN ALERT')

// VARIABLES | let, var | HOLDS AN OBJECT
// var myVar1 = 100
// console.log(myVar1)
// console.log(typeof (myVar1))

// var myVar2 = "First String"
// console.log(myVar2)
// console.log(typeof (myVar2))

// var myVar3 = true
// console.log(myVar3)
// console.log(typeof (myVar3))

// var myVar4 = null
// console.log(myVar4)
// console.log(typeof (myVar4))        // object

// var myVar5 = undefined
// console.log(myVar5)
// console.log(typeof (myVar5))

// var myVar6
// console.log(myVar6);


// FUNCTIONS
// ES6 --> Arrow Functions
// let someVariable = () => { ... }
// let sayHello = () => { console.log('HEY!') }
// function product(num1, num2, para3) {
//     if (typeof (num1) == 'number' && typeof (num2) == 'number') {
//         if (typeof (para3) == 'function') {
//             para3()
//         }
//         return num1 * num2
//     } else {
//         return "NOT POSSIBLE"
//     }
// }

// // console.log(typeof (sayHello))

// console.log(product(10, 50, sayHello))
// console.log(product("Hello", "Bye"))
// console.log(product(true, true))

// setTimeout(() => {
//     console.log('WORKS!')
// }, 2000)


// ARRAYS

// let myArray1 = new Array()

// let sayHello = () => {
//     console.log('HEY!')
// }
// let nums = [10, 20, 30, 40, 50]
// let myArray = [10, "MyString", true, null, undefined, nums, sayHello]

// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i])
// }


// let nums = [10, 20, 30, 40, 50]
// // let copyNums = nums         // shallow copy
// let copyNums = [...nums]       // deep copy
// // for (let i = 0; i < nums.length; i++) {
// //     copyNums[i] = nums[i]
// // }

// copyNums[0] = 1
// nums[1] = 2

// console.log(nums)
// console.log(copyNums)


// 'let', 'var' & 'const'
// var value = 100

// if (value >= 50) {
//     const output = value + ' is greater than 100'
//     console.log(output)
// } else {
//     let output = value + ' is NOT greater than 100'
//     console.log(output)
// }

// const someVariable = 10
// console.log(someVariable)
// someVariable = 100              // undefined --> 100


// JS_ Object --> { key: value }

// const myObj = new Object()
const sqaure = num1 => num1 * num1;
console.log(sqaure(10))

const person = {
    age: 43,
    name: 'John Doe',
    isAdult: true,
    hobbies: ['cricket', 'reading'],
    address: {
        city: 'Dehradun',
        state: 'Uttarakhand',
        country: 'India'
    },
    myFunc: sqaure
}

const myJSON = JSON.stringify(person)
console.log(myJSON)

const myObj = JSON.parse(myJSON)
console.log(myObj)

console.log(person)
console.log(`${person.age} is ${person.age} years old`)

console.log(person.hobbies[1])
console.log(person.address.state)

const people = [{}, {}, {}, {}]
console.log(people)

// JSON --> JS_Object_Notation