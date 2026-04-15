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
function product(num1, num2, arg3) {
    if (typeof (num1) == 'number' && typeof (num2) == 'number') {
        if (typeof (arg3) == 'function') {
            arg3()
        }
        return num1 * num2
    } else {
        return "NOT POSSIBLE"
    }
}

console.log(product(10, 50))
console.log(product("Hello", "Bye"))
console.log(product(true, true)) 
