// int a = 100
// let a = 100.05
// console.log(a)
// console.log(typeof (a))

// a = `JavaScript`
// console.log(a);
// console.log(typeof (a))

// a = true
// console.log(a);
// console.log(typeof (a))

// a = null
// console.log(a);
// console.log(typeof (a))

// a = undefined
// console.log(a);
// console.log(typeof (a))


// let, var & const
// let a = 100
// if (a >= 50) {
//     let result = a + " is greater than 50"
//     console.log(result)
// } else {
//     let result = a + " is lesser than 50"
//     console.log(result)
// }
// console.log(result);


// const pi = 3.144
// // pi = 3.14
// console.log(pi);

// pi = 3
// console.log(pi);


// 1. FUNCTIONS --> (  )
// function product(num1, num2) {
//     if (typeof (num1) == 'number' && typeof (num2) == 'number') {
//         return num1 * num2
//     } else {
//         return num1 + " & " + num2 + " can be product"
//     }
// }

// console.log(product(10, 20))
// console.log(product("Hello", "Bye"))
// console.log(product(100, "Bye"))
// // console.log(typeof (product))

// const pi = 3.14
// const myFunction = product

// console.log(typeof (pi));
// console.log(typeof (myFunction));

// ARROW FUNCTIONS
// const multiply = (num1, num2, myFunc) => {
//     if (typeof (num1) == 'number' && typeof (num2) == 'number') {
//         myFunc()
//         return num1 * num2

//     } else {
//         myFunc()
//         return num1 + " & " + num2 + " can be product"
//     }
// }
// // console.log(typeof (multiply))
// console.log(multiply(5, 5, () => {
//     console.log("Hello")
// }));


// 2, Arrays - [  ]
// const sayHello = () => {
//     console.log('hello...')
// }

// let arr1 = [10, "hello", true, null, undefined, sayHello]

// // let arr2 = arr1          // shallow
// let arr2 = [...arr1]        // deep

// arr2[0] = 100

// console.log(arr1);
// console.log(arr2);

// console.log(arr.length);
// console.log(arr[6][2]);

// for loops
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// 3. JS_Object --> { key: value, key: value, .... }
const sayHello = () => {
    console.log('Hello');
}

const person = {
    name: "John",
    age: 25,
    hobbies: ['cricket', 'reading'],
    address: {
        street: 'Strret One',
        city: 'Dehradun',
        state: 'Uttarakhand'
    },
    isAdult: true,
    myFunc: sayHello
}

console.log(person);


const people = [{}, {}, {}, {}]
console.log(people);


const myJSONData = JSON.stringify(person)
console.log(myJSONData);

const myData = JSON.parse(myJSONData)
console.log(myData);

