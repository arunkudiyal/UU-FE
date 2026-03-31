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
//     const result = a + " is greater than 50"
//     console.log(result)
// } else {
//     let result = a + " is lesser than 50"
//     console.log(result)
// }

// let pi
// pi = 3.14
// console.log(pi);


function product(num1, num2) {
    if (typeof (num1) == 'number' && typeof (num2) == 'number') {
        return num1 * num2
    } else {
        return num1 + " & " + num2 + " can be product"
    }
}

console.log(product(10, 20))
console.log(product("Hello", "Bye"))

let myFunction = product
console.log(myFunction);
