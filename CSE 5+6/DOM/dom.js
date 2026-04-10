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

// Event Parameters -- holds meta data related to the event
// document.getElementById('button').addEventListener('click', (e) => {
//     console.log(e)
//     console.log('Button was clicked!')
// })

// document.getElementById('text-input').addEventListener('keyup', (e) => {
//     console.log(e.target.value)
//     // console.log('key up')
// })

// document.getElementById('submitBtn').addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log('Submit button clicked')

// })


// Generate HTMl from DOM

const myDiv = document.createElement('div')

myDiv.setAttribute('id', 'myDiv')
myDiv.setAttribute('class', 'someClass')
myDiv.setAttribute('style', 'color: yellow')

myDiv.textContent = "Hey, this div was created by DOM"
console.log(myDiv);

// .appendChild()
document.getElementById('main-header').appendChild(myDiv)


// THE APP

document.getElementById('submitBtn').addEventListener('click', (e) => {
    e.preventDefault()

    if (document.getElementById('text-input').value == "") {
        console.error('Form values missing!')
    } else {
        let myText = document.getElementById('text-input').value

        let myLi = document.createElement('li')
        myLi.textContent = myText
        myLi.setAttribute('class', 'list-group-item')
        document.getElementById('items').appendChild(myLi)

        console.log(myLi)

    }

})