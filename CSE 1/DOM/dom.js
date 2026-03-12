console.dir( document )
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

console.log( document.querySelector('#header-title') );
console.log( document.querySelectorAll('.list-group-item') );
