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
function product(num1, num2) {
    if (typeof (num1) == 'number' && typeof (num2) == 'number') {
        return num1 * num2
    } else {
        return "NOT POSSIBLE"
    }
}

let myFunction = product
console.log(typeof (myFunction))


console.log(product(10, 20))
console.log(product("Hello", "Bye"))
console.log(product(true, false))
