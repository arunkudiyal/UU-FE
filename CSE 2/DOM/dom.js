// console.dir( document )
// console.dir( document.all )

// Access Methods
// const h2 = document.getElementById('add-items')
// console.log(h2);

// h2.textContent = 'Updated Items'

// console.log( document.getElementsByClassName('list-group-item') );

// console.log( document.getElementsByTagName('h2') );

// console.log( document.querySelector('#add-items') );
// console.log( document.querySelectorAll('.list-group-item') );
// console.log( document.querySelectorAll('h2') );


// DOM MANIPULATION


// document.getElementById('add-items').textContent = "UPDATED"
// document.getElementById('add-items').innerHTML = "<h3>UPDATED h3</h3>"

// Change CSS using JS
// // element.style.cssProperty = "cssPropertyValue"
// const lis = document.getElementsByClassName('list-group-item')
// for( let i=0; i < lis.length; i++ ) {
//     if( i % 2 == 0 ) {
//         // even indexed 
//         lis[i].style.backgroundColor = 'black'
//         lis[i].style.color = 'white'
//     } else {
//         // odd indexed
//         lis[i].style.backgroundColor = 'lightGray'
//     }
// }


// EVENTS

const myBtn = document.getElementById('button')
// myBtn.addEventListener( 'eventName', () => { ... } )
// myBtn.addEventListener( 'click', () => {
//     console.log('Button Clicked')
// } )

// document.getElementById('text-input').addEventListener('mouseenter', () => {
//     console.log('Mouse Enter');
    
// })

// document.getElementById('text-input').addEventListener('mouseleave', () => {
//     console.log('Mouse Leave');
    
// })

// document.getElementById('text-input').addEventListener('copy', () => {
//     console.log('Text copied!');
    
// })

// document.getElementById('text-input').addEventListener('cut', () => {
//     console.log('Text was cut!');
    
// })

// document.getElementById('text-input').addEventListener('paste', () => {
//     console.log('Text was pasted!');
    
// })


// Exception Case --> 
// Event Parameter
// document.getElementById('submitBtn').addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log('Submit button was clicked!')
//     console.log(event);
// } )

// document.getElementById('text-input').addEventListener('keyup', (e) => {
//     console.log(e.target.value)
// })


// // FUN ACTIVITY

// document.getElementById('my-div').addEventListener('mouseenter', (e) => {
//     document.getElementById('my-div').style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 100)`
// })

// document.getElementById('my-div').addEventListener('mouseleave', (e) => {
//     document.getElementById('my-div').style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 100)`
// })


// Create HTML getElementsByClassName - createElement
// Add element to HTML - appendChild
setTimeout( () => {
    const myPara = document.createElement('p')
    myPara.textContent = 'This is my paragraph'
    myPara.setAttribute('class', 'text-warning')
    document.getElementById('header-section').appendChild(myPara)
}, 3000 )

document.getElementById('submitBtn').addEventListener('click', (e) => {
    e.preventDefault()

    const item = document.getElementById('text-input').value
    const myLi = document.createElement('li')
    myLi.textContent = item;
    myLi.setAttribute('class', 'list-group-item')

    document.getElementById('items').appendChild(myLi)
    document.getElementById('text-input').value = ""
})