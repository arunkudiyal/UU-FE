// console.dir(document)
// console.log(document.all[10])

// setTimeout(() => {
//     document.all[10].textContent = "New Item Lister"
// }, 3000)

// Identifier Methods --> Access any element in HTML
// const heading = document.getElementById('header-title')

// const lis = document.getElementsByClassName('list-group-item')
// console.log(lis);

// for (let i = 0; i < lis.length; i++) {
//     if (i % 2 == 0) {
//         // even
//         lis[i].style.backgroundColor = 'gray'
//         lis[i].style.color = 'white'
//     } else {
//         // odd
//     }
// }

// const myH2 = document.getElementsByTagName('h2')
// console.log(myH2);


// EVENTS
// 1. access the element
// 2. addEventListener to that element

// const myBtn = document.getElementById('button')
// // myBtn.addEventListener('name-of-the-event', () => { })

// // Event Parameter
// myBtn.addEventListener('click', (event) => {
//     console.log('Button was clicked!');
// })

// document.getElementById('submitBtn').addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log('Submit Button was clicked!');
// })

document.getElementById('text-input').addEventListener('keyup', (e) => {
    console.log(e.target.value);
})

document.getElementById('text-input').addEventListener('copy', () => {
    console.log('COPIED');

})

document.getElementById('text-input').addEventListener('paste', () => {
    console.log('PASTED');

})

document.getElementById('text-input').addEventListener('cut', () => {
    console.log('CUT');

})

document.getElementById('text-input').addEventListener('mouseenter', () => {
    console.log('MOUSE ENTER');

})

document.getElementById('text-input').addEventListener('mouseleave', () => {
    console.log('MOUSE LEAVE');

})