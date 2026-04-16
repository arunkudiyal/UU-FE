// Plain JS | Vanilla JS
// 1. JS is NOT compiled, INTERPRETED
// 2. JS is COMPLETELY OOP
// (everything & anything in JS is OBJECTS)
// 3. JS is dynmaically typed

// print
// console.log('Hello')
// console.error('This is an error')
// console.warn('This is a warning')
// alert('THIS IS AN ALERT')

// VARIABLES | let, var
// is a place to hold objects
// let some
// console.log(some)

// let num1 = 3.14
// console.log(num1)
// console.log(typeof (num1))

// num1 = "This is an string"
// console.log(num1)
// console.log(typeof (num1))

// num1 = true
// console.log(num1)
// console.log(typeof (num1))

// let someVariable = undefined
// console.log(someVariable)
// console.log(typeof (some))

// let someVariable2 = null
// console.log(someVariable2)
// console.log(typeof (someVariable2))



// FUNCTIONS
// let variable = ( ) => { ... }
// let sayHello = 

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

// console.log(product(10, 20, () => {
//     console.log('Hey!')
// }))

// console.log(product(10, 5))
// console.log(product(true, false))

// let someFunction = product
// console.log(typeof (someFunction))
// setTimeout(() => { console.log('WORKS') }, 2000)


// ARRAYS --> [ ]

// let myArray = new Array()
// console.log(myArray)

// let nums = [10, 20, 30, 40]

// let sayHello = () => {
//     console.log('HELLO')
// }

// let myArray = [10, "MyString", true, null, undefined, sayHello]
// console.log(myArray)

// setTimeout(sayHello(), 2000)

// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i])
// }


// let nums = [10, 20, 30, 40, 50]

// // shallow-copy
// // let copyNums = nums

// // deep-copy
// let copyNums = [...nums]
// // for (let i = 0; i < nums.length; i++) {
// //     copyNums[i] = nums[i]
// // }

// copyNums[0] = 1
// nums[1] = 2

// console.log(nums)
// console.log(copyNums)


// 'let', 'var', & 'const'

// var myNum = 100
// if (myNum >= 50) {
//     const output = 'This is greater than 50'
//     console.log(output)
// } else {
//     let output = 'This is NOT greater than 50'
//     console.log(output)
// }

// const anyVarible = 100
// // anyVarible = 200                 // cannot re-assign values
// console.log(anyVarible)


// JS_Object --> { key: value }

// const myObj = new Object()
// console.log(myObj);

// const user = {
//     userName: 'johndoe',
//     age: 27,
//     isAdult: true,
//     hobbies: ['reading', 'gaming'],
//     address: {
//         city: 'Dehradun',
//         state: 'Uttarakhand',
//         country: 'India'
//     }
// }

// // const copyUser = user
// const copyUser = { ...user }
// copyUser.age = 30

// console.log(copyUser)
// console.log(user)

// const myJSON = JSON.stringify(user)
// console.log(myJSON)

// const myObj = JSON.parse(myJSON)
// console.log(myObj)

// const users = [{}, {}, {}, {}]
// console.log(users)

// console.log(user)
// console.log(user.age)
// console.log(user.hobbies[1])
// console.log(user.address.country)

