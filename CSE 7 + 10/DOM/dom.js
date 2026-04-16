// console.dir(document)
// console.dir(document.all)
// console.dir(document.all[10])

// setTimeout(() => {
//     document.all[10].textContent = 'NEW ITEM LISTER'
// }, 2000)

// IDENTIFIER METHODS 
// 1. byId()

const myH1 = document.getElementById('header-title')
myH1.textContent = 'SOMETHING ELSE'

// 2. byClassName()

const myLi = document.getElementsByClassName('list-group-item')
console.log(myLi);

for (let i = 0; i < myLi.length; i++) {
    if (i % 2 == 0) {
        // even idx | change CSS
        // elt.style.cssProperty = 'value'
        myLi[i].style.backgroundColor = 'gray'
        myLi[i].style.color = 'white'
    }
}