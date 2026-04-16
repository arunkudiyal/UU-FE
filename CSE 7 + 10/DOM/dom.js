// console.dir(document)
// console.dir(document.all)
// console.dir(document.all[10])

// setTimeout(() => {
//     document.all[10].textContent = 'NEW ITEM LISTER'
// }, 2000)

// IDENTIFIER METHODS 
// 1. byId()
// const myH1 = document.getElementById('header-title')
// myH1.textContent = 'SOMETHING ELSE'

// // 2. byClassName()
// const myLi = document.getElementsByClassName('list-group-item')
// console.log(myLi);

// for (let i = 0; i < myLi.length; i++) {
//     if (i % 2 == 0) {
//         // even idx | change CSS
//         // elt.style.cssProperty = 'value'
//         myLi[i].style.backgroundColor = 'gray'
//         myLi[i].style.color = 'white'
//     }
// }

// // 3. tagName()
// const myH2 = document.getElementsByTagName('h2')
// console.log(myH2)



// EVENTS :- User interaction on app
// Element.addEventListener('nameOfEvent', () => { } )

const myBtn = document.getElementById('button')
myBtn.addEventListener('click', () => {
    console.log('Button was clicked!')
})

const submitBtn = document.getElementById('submitBtn')
submitBtn.addEventListener('click', () => {
    console.log('Submit Button was clicked!')
})

// const lis = document.getElementsByClassName('list-group-item')
// for (let i = 0; i < lis.length; i++) {
//     if (i % 2 == 0) {
//         lis[i].addEventListener('click', () => {
//             console.log('EVEN')
//         })
//     } else {
//         lis[i].addEventListener('click', () => {
//             console.log('ODD')
//         })
//     }
// }