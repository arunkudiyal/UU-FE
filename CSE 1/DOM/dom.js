// console.dir( document )
// console.log(  document.all )

// Identufier Methods
// const myH1 = document.getElementById('header-title')
// console.log(myH1);

// const liS = document.getElementsByClassName('list-group-item')
// console.log(liS);

// for(let i=0; i < liS.length; i++) {
//     if(i % 2 == 0) {
//         liS[i].textContent = 'CHANGED'
//     }
// }

// const h2s = document.getElementsByTagName('h2')
// console.log(h2s);

// console.log( document.querySelector('#header-title') );
// console.log( document.querySelectorAll('.list-group-item') );

// Change CSS

// const lis = document.getElementsByClassName('list-group-item')
// console.log(lis);

// for(let i=0; i < lis.length; i++) {
//     if( i % 2 != 0 ) {
//         lis[i].style.backgroundColor = 'black'
//         lis[i].style.color = 'white' 
//     } else {
//         lis[i].style.backgroundColor = 'gray'
//     }
// }

// setTimeout( () => {
//     document.getElementById('button').setAttribute('class', 'btn btn-primary')
// }, 3000 )

// textContent

// document.getElementById('header-title').textContent = 'New Item Lister'
// document.getElementById('header-title').innerHTML = '<h2>New Item Lister</h2>'

// EVENT LISTNERS
// addEventListener('eventName', () => { ... })

// Event Param
// document.getElementById('submitBtn').addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log('Button was clicked!');
//     console.log(event)
// } )

// document.getElementById('text-input').addEventListener('mouseenter', (event) => {
//     console.log('Mouse entered to text-box');
    
// })
// document.getElementById('text-input').addEventListener('mouseleave', (event) => {
//     console.log('Mouse left from to text-box');
    
// })
// document.getElementById('text-input').addEventListener('cut', (event) => {
//     console.log('Cut');
    
// })
// document.getElementById('text-input').addEventListener('copy', (event) => {
//     console.log('Copy');
    
// })
// document.getElementById('text-input').addEventListener('paste', (event) => {
//     console.log('Paste');
    
// })


// Exercise
document.getElementById('submitBtn').addEventListener( 'click', (e) => {
    e.preventDefault();
    console.log( document.getElementById('text-input').value )

    const myLi = document.createElement('li')
    myLi.textContent = document.getElementById('text-input').value
    myLi.setAttribute('class', 'list-group-item')

    document.getElementById('items').appendChild(myLi)
    
} )


document.getElementById('my-container').addEventListener('mouseenter', (e) => {
    document.getElementById('my-container').style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 100)`
})

document.getElementById('my-container').addEventListener('mouseleave', (e) => {
    document.getElementById('my-container').style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 100)`
})

// Access elements bnased on relations

console.log( document.getElementById('items').parentElement )
console.log( document.getElementById('items').previousElementSibling );
