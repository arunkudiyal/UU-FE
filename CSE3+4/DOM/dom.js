// HTML but in form of JS Objects
// console.dir(document)
// console.log(document.all);
// console.log(document.all[10]);

// setTimeout(() => {
//     document.all[10].textContent = "Change the text content"
// }, 3000)


// IDENTIFIER METHODS
// const head = document.getElementById('header-title')
// head.textContent = 'CHANGED!'

// const lis = document.getElementsByClassName('list-group-item')
// console.log(lis)

// for (let i = 0; i < lis.length; i++) {
//     if (i % 2 == 0) {
//         // even
//         // CSS :- elemnent.style.cssProperty = "cssPValue"
//         lis[i].style.backgroundColor = "gray"
//         lis[i].style.color = "white"
//     } else {
//         // odd
//     }
// }
// console.log(document.getElementsByTagName('h2'));


// EVENTS
// 1. select the elemnent
// 2. addEventListner on the element

// elemnent.addEventListner('nameOfTheEvent', () => {} )

// document.getElementById('button').addEventListener('dblclick', () => {
//     document.getElementById('button').style.backgroundColor = 'green'
// })

// const btn = document.getElementById('button')
// const clickHandler = () => {
//     btn.style.backgroundColor = 'green'
// }

// btn.addEventListener('click', clickHandler)

// const btn = document.getElementById('button')
// // Event Parameter
// btn.addEventListener('click', (event) => {
//     btn.style.backgroundColor = 'green'
//     console.log('Button was clicked!')
// })

// const submitBtn = document.getElementById('submitBtn')
// submitBtn.addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log('Submit button was clicked!');
// })


// document.getElementById('text-input').addEventListener('mouseenter', () => {
//     console.log("ENTERED!");
// })

// document.getElementById('text-input').addEventListener('mouseleave', () => {
//     console.log("LEFT!");
// })

// document.getElementById('text-input').addEventListener('keyup', (e) => {
//     console.log(e.target.value);
// })

// document.getElementById('text-input').addEventListener('cut', () => {
//     console.log("CUT!");
// })

// document.getElementById('text-input').addEventListener('copy', () => {
//     console.log("COPIED!");
// })

// document.getElementById('text-input').addEventListener('paste', () => {
//     console.log("PASTED!");
// })


// DOM TREE :- Relationships
// console.log(document.getElementById('items').children)

// console.log(document.getElementById('header-title').parentElement);

// console.log(document.getElementById('add-items').nextElementSibling.nextElementSibling.nextElementSibling);



// How to create HTML using JS (DOM)

const myH4 = document.createElement('h4')
myH4.textContent = "This is JS generated element!"
myH4.setAttribute('style', 'color: yellow')


document.getElementById('header-section').appendChild(myH4)


// PROOJECT WORK :--

document.getElementById('submitBtn').addEventListener('click', (e) => {
    e.preventDefault()

    const myText = document.getElementById('text-input').value
    console.log(myText);

    // create a list item with text 'myText'

    const myLi = document.createElement('li')
    myLi.textContent = myText
    myLi.setAttribute('class', 'list-group-item')

    document.getElementById('items').appendChild(myLi)

    document.getElementById('text-input').value = ""
})