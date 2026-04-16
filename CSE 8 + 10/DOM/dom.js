// console.dir(document)

// setTimeout(() => {
//     document.all[10].textContent = 'NEW ITEM LISTER'
// }, 2000)


// Identifier Methods
// 1. byId()
// const myH1 = document.getElementById('header-title')
// console.log(myH1);


// 2. byClassName
// const lis = document.getElementsByClassName('list-group-item')
// console.log(lis)

// for (let i = 0; i < lis.length; i++) {
//     if (i % 2 == 0) {
//         // even indexed items
//         // element.style.cssProperty = 'value'
//         lis[i].style.backgroundColor = 'gray'
//         lis[i].style.color = 'white'
//     }
// }

// // 3. byTagName()
// const myH2 = document.getElementsByTagName('h2')
// console.log(myH2)


// EVENTS - user interaction on the app
// Element.addEventListener('nameOfTheEvent', () => { } )

// const btn = document.getElementById('button')
// const clickHandler = () => { console.log('Button was clicked!') }

// btn.addEventListener('click', clickHandler)

// btn.addEventListener('dblclick', () => {
//     console.log('Button was clicked TWICE!')
// })

// document.getElementById('button').addEventListener('click', () => {
//     console.log('Button Clicked!')
// })

// // EVENT PARAMETERS
// document.getElementById('submitBtn').addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log('Submit Button Clicked!')
// })

// document.getElementById('text-input').addEventListener('mouseenter', () => {
//     console.log('Ponter ENTERS');

// })

// document.getElementById('text-input').addEventListener('mouseleave', (e) => {
//     console.log(e)
//     console.log('Ponter LEAVES');

// })

// document.getElementById('text-input').addEventListener('keyup', (e) => {
//     // document.getElementById('myPara').textContent = e.target.value

//     console.log(e.target.value)
//     // console.log('Key Up')
// })

// document.getElementById('submitBtn').addEventListener('click', (e) => {
//     e.preventDefault()

//     console.log(document.getElementById('text-input').value)
//     console.log(document.getElementById('check').value)
//     console.log(document.getElementById('color').value)

//     document.getElementById('text-input').value = ''
//     document.getElementById('color').value = '#000'
// })

// createElement
const myPara = document.createElement('p')
myPara.textContent = 'THIS IS MY PARAGRAPH!'
myPara.setAttribute('id', 'myPara')
myPara.setAttribute('class', 'myParaClass')
myPara.setAttribute('style', 'color: yellow')

document.getElementById('header-section').appendChild(myPara)

console.log(myPara)

