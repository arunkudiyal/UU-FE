// console.dir(document)
// console.log(document.all);
// document.all[10]
// .textContent

// Identifier Methods
// 1.ById()
// const myH1 = document.getElementById('header-title')
// console.log(myH1);

// // 2. ByClassName
// let myLi = document.getElementsByClassName('list-group-item')

// for (let i = 0; i < myLi.length; i++) {
//     if (i % 2 == 0) {
//         // even index
//         // element.style.cssProperty = "newValue"
//         myLi[i].style.backgroundColor = "gray"
//         myLi[i].style.color = "white"
//     }
// }

// 3. ByTagName
// let allH2 = document.getElementsByTagName('h2')
// console.log(allH2);



// vv. Imp :- EVENTS
// Interaction of the user on the app
// htmlElement.addEventListner('nameOfTheEvent', () => {})

// document.getElementById('button').addEventListener('click', () => {
//     console.log('Button was clicked!')
// })

// // EVENET PARAMETERS
// document.getElementById('submitBtn').addEventListener('click', (event) => {
//     event.preventDefault()
//     console.log('THIS IS PRINTING!')
//     console.log(event)
// })

// document.getElementById('text-input').addEventListener('mouseenter', () => {
//     console.log('Mouse entered in the text box')
// })

// document.getElementById('text-input').addEventListener('mouseleave', () => {
//     console.log('Mouse left in the text box')
// })

// document.getElementById('text-input').addEventListener('cut', () => {
//     console.log('text cut from the text box')
// })

// document.getElementById('text-input').addEventListener('copy', () => {
//     console.log('text copied from the text box')
// })

// document.getElementById('text-input').addEventListener('paste', () => {
//     console.log('text pasted to the text box')
// })

document.getElementById('text-input').addEventListener('keyup', (e) => {
    console.log(e)
    console.log(e.target.value)
})