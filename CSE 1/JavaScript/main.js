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
// 1. ARRAYS | [ ]

// let arr1 = [ 100, 200, 300, 400, 500 ]
// let arr2 = [ ...arr1 ]

// arr1.push(600)
// console.log(arr1)

// arr1.splice(0, 2)
// console.log(arr1)

// arr1.pop()
// console.log(arr1)

// 2. FUNCTIONS | ( )
// function add(num1, num2) {
//     if( typeof(num1) == 'number' && typeof(num2) == 'number' ) {
//         console.log( num1 + num2 )
//     } else {
//         console.log( `Can not add ${num1} & ${num2}` )
//     }
// }

// // const variable = () => { ... }
// const newAdd = ( num1, num2 ) => {
//     if( typeof(num1) == 'number' && typeof(num2) == 'number' ) {
//         return num1 + num2
//     } else {
//         return `Can not add ${num1} & ${num2}`
//     }
// }

// console.log(newAdd(100, 200));
// console.log(newAdd('Hello', 'JS'));

// let functionVariable = add;
// console.log(functionVariable);
// setTimeout( () => {
//     console.log('Welcome to JS!')
// }, 2000 )

// 3. OBJECTS | key: Value | { }
// const employee = {
//     empId: 101834,
//     empName: 'employee one',
//     empDesig: 'SDE 1',
//     isDeployed: true,
//     hobbies: ['reading', 'soccer', 'movies'],
//     address: {
//         city: 'Dehradun',
//         country: 'India'
//     }
// }
// console.log(employee);
// console.log(employee.empDesig)
// console.log(employee.hobbies[1])
// console.log(employee.address.city)

// const myJSON = JSON.stringify(employee);
// console.log(myJSON)

// const convertedObject = JSON.parse(myJSON)
// console.log(convertedObject);

// const aoO = [ {}, {}, {} ]
// console.log(aoO);

// const employees = [
//     {
//         empId: 101834,
//         empName: 'employee one',
//         empDesig: 'SDE 1',
//         isDeployed: true,
//         hobbies: ['reading', 'soccer', 'movies'],
//         address: {
//             city: 'Dehradun',
//             country: 'India'
//         }
//     },
//     {
//         empId: 3363,
//         empName: 'employee two',
//         empDesig: 'SDE 1',
//         isDeployed: true,
//         hobbies: ['reading', 'soccer', 'movies'],
//         address: {
//             city: 'Tehri',
//             country: 'India'
//         }
//     }
// ]
// console.log(employees);
// console.log(employees[1].empName)

const a = 100
const b = [10, 20, 30]
const employees = [
    {
        emp_id: 1001,
        designation: 'SDE',
        company: 'Wipro',
        yearsOfExp: 3,
        skiils: ['C', 'C++', 'Java'],
        location: {
            officeLoaction: 'Mumbai',
            pin: 12345
        }
    }, 
    {
        emp_id: 1023,
        designation: 'Tester',
        company: 'Facebook',
        yearsOfExp: 3,
        skiils: ['Mocha', 'JUnit'],
        location: {
            officeLoaction: 'Hyderabad',
            pin: 12342
        }
    }, 
    {
        emp_id: 1021,
        designation: 'SME',
        company: 'Apple',
        yearsOfExp: 5,
        skiils: ['JS', 'React', 'Angular'],
        location: {
            officeLoaction: 'Bangalore',
            pin: 12323
        }
    }, 
    {
        emp_id: 1065,
        designation: 'Content Designer',
        company: 'Netflix',
        yearsOfExp: 2,
        skiils: ['Wordpress', 'Photoshop'],
        location: {
            officeLoaction: 'Delhi',
            pin: 12001
        }
    }
]

// employees = {}

employees[0].company = 'Google'
console.log(employees)

// for(let i=0; i < employees.length; i++) {
//     console.log(employees[i].emp_id)
// }

// Higher Order Array Methods
// 1. forEach
// forEach( (itrValue, index?, array?) => { } )

// employees.forEach( emp => console.log(emp.emp_id) )
// employees.forEach( (emp, index, array) => { 
//     if( index % 2 == 0 ) {
//         console.log(`Index - ${index} | ID - ${emp.emp_id}`)
//     } 
// })

// 2. map()
const employeeIDS = employees.map( emp => emp.emp_id )
console.log(employees)

// console.log(employeeIDS)
