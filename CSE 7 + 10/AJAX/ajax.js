// url --> https://api.github.com/users

// step 1 - create an object of XHR
const xhr = new XMLHttpRequest()
const url = 'https://api.github.com/users'

// readyState = 0
console.log(xhr.readyState)

// step 2 - open the portal of communication
xhr.open('GET', url)

// readyState = 1
console.log(xhr.readyState)

// step 3 - do something on stateChange
xhr.onreadystatechange = () => {
    // readyState = 1 -> 2 -> 3 -> 4
    console.log(xhr.readyState)
    if (xhr.readyState == 4) {
        const resp = JSON.parse(xhr.responseText)
        console.log(resp)
        let output = ''
        for (let i = 0; i < resp.length; i++) {
            output += `
            <div>
                <img src="${resp[i].avatar_url}" />
                <h3>${resp[i].login}</h3>
                <a target="_blank" href="${resp[i].html_url}">GitHub Profile</a>
            </div>
            <hr />
        `
        }

        document.getElementById('container').innerHTML = output
    }

}
// step 4 - send the request
xhr.send()