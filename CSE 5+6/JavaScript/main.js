// console.log('Statemnt - 1')
// console.error('Error')
// console.warn('Warning')
// alert('Alret!')

// let varaibleName = value
// var myVariable1 = 100 // let myVariable1 = new Number()
// var someVariable = myVariable1

// console.log(someVariable);
// console.log(myVariable1);

// // change the value of myVariable1
// myVariable1 = 200
// console.log(someVariable);
// console.log(myVariable1);

// let myVariable2 = "MyString"
// console.log(myVariable2)
// console.log(typeof (myVariable2))

// let myVariable3 = true
// console.log(myVariable3)
// console.log(typeof (myVariable3))

// let myVariable4 = null
// console.log(myVariable4)
// console.log(typeof (myVariable4))

// let myVariable5 = undefined
// console.log(myVariable5)
// console.log(typeof (myVariable5))


// FUNCTIONS - ( )
// function sayHello() {
//     console.log('HELLO!')
// }
// function product(a, b, c) {
//     if (typeof (a) == "number" && typeof (b) == "number") {
//         if (typeof (c) == 'function') {
//             c()
//         }
//         return a * b
//     } else {
//         return "Not possible"
//     }
// }
// // Function obj = new Function()
// let myFunction = product
// // console.log(myFunction);

// console.log(product(10, 20, sayHello))
// console.log(product("Hello", "Bye"))
// console.log(product(true, true)) 


// ES6 | Arrow Functions
// let myVariable = () => { }
// console.log(typeof (myVariable))

// let myFunction = (a, b, c) => {
//     if (typeof (a) == "number" && typeof (b) == "number") {
//         if (typeof (c) == 'function') {
//             c()
//         }
//         return a * b
//     } else {
//         return false
//     }
// }
// console.log(typeof (myFunction));
// console.log(myFunction(20, 30, () => {
//     console.log('HELLO');
// }));


// ARRAYS - [ ]
// var myFunction = () => {
//     console.log('HELLO');
// }
// var myArray = [10, `String`, true, null, undefined]
// console.log(myArray);

// for (let i = 0; i < myArray.length; i++) {
//     console.log(`Array element at ${i} - ${myArray[i]}`)
// }


// var arr1 = [10, 20, 30]
// console.log(typeof (arr1))


// shallow copy
// var copyArray = arr1
// deep copy
// var copyArray = [...arr1]

// console.log(arr1)
// console.log(copyArray)

// arr1[0] = 100
// copyArray[1] = 200

// console.log(arr1)
// console.log(copyArray)

// var twoDArray = [[10, 20, 30], [40, 50, 60], [70, 80, 90]]
// console.log(twoDArray)


// JS_Objects - { key: valueObject }
// let person = {
//     name: 'John',
//     age: 30,
//     hobbies: ['cricket', 'reading'],
//     address: {
//         city: 'Dehradun',
//         state: 'Uttarakhand'
//     },
//     isAdult: true
// }

// console.log(person)

// let myJSON = JSON.stringify(person)
// console.log(myJSON);

// let myJSONObject = JSON.parse(myJSON)
// console.log(myJSONObject);

// const people = [{}, {}, {}, {}]
// console.log(people);

// console.log(person)
// console.log(person.age)
// console.log(person.hobbies[1])
// console.log(person.address.state)

