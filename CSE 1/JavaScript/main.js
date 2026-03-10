// console.log("hello");
// console.warn("warning...");
// console.error("error...");

// let num = 100
// console.log(num)

// // let, var & const
// if( num >= 50 ) {
//     const output = 'This is greater'
//     console.log(output)
// } else {
//     const output = 'This is smaller'
//     console.log(output)
// }

// console.log(output)

// const b = "Constant Value"
// b = "Changed Value"
// console.log(b)

// Primitive Data Types
// let a = 100
// console.log(a)
// console.log( typeof(a) )

// let b = 'MyString1'
// console.log(b)
// console.log( typeof(b) )

// let bb = "MyString2"
// console.log(bb)
// console.log( typeof(bb) )

// let bbb = `MyString3`
// console.log(bbb)
// console.log( typeof(bbb) )

// let c = true
// console.log(c)
// console.log( typeof(c) )

// let d = null
// console.log(d)
// console.log( typeof(d) )            // object

// let e = undefined
// console.log(e)
// console.log( typeof(e) )

// SYMBOL

// Non-Primitive
// 1. ARRAYS

// let arr1 = [ 100, 200, 300, 400, 500 ]
// let arr2 = [ ...arr1 ]

// arr1.push(600)
// console.log(arr1)

// arr1.splice(0, 2)
// console.log(arr1)

// arr1.pop()
// console.log(arr1)

// 2. FUNCTIONS
function add(num1, num2) {
    if( typeof(num1) == 'number' && typeof(num2) == 'number' ) {
        console.log( num1 + num2 )
    } else {
        console.log( `Can not add ${num1} & ${num2}` )
    }
}

const newAdd = ( num1, num2 ) => {
    if( typeof(num1) == 'number' && typeof(num2) == 'number' ) {
        console.log( num1 + num2 )
    } else {
        console.log( `Can not add ${num1} & ${num2}` )
    }
}

newAdd(100, 200)
newAdd('Hello', 'JS')
