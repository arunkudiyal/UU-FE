// step 1 - create the obj of XHR
const xhr = new XMLHttpRequest()
const url = 'https://api.github.com/users'
// https://api.github.com/users/${userName}

// step 2 - open the portal of communication
// console.log(xhr.readyState);
xhr.open('GET', url)
// console.log(xhr.readyState);
// step 3 - perform action on readyStateChange
xhr.onreadystatechange = () => {
    if (xhr.readyState == 4) {
        const jsonResp = xhr.responseText
        const resp = JSON.parse(jsonResp)

        // create the HTML
        let output = ``
        for (let i = 0; i < resp.length; i++) {
            output += `
                <div>
                    <img src="${resp[i].avatar_url}" />
                    <h3>${resp[i].login}</h3>
                    <a href="${resp[i].html_url}">GitHub Profile</a> 
                    <br /> <br /> <br />
                </div>
            `
        }
        console.log(output);
        document.getElementById('my-container').innerHTML = output
    }
}

xhr.send()