// step 1 - create an object of XMLHttpRequest
let xhr = new XMLHttpRequest()
let url = `https://api.github.com/users`
console.log(xhr.readyState)             // 0
// step 2 - open the portal of communication b/w client & server
xhr.open('GET', url)
console.log(xhr.readyState)             // 1
// step 3 - do code onreadystatechange
xhr.onreadystatechange = () => {
    console.log(xhr.readyState)         // 1->2->3->4
    if (xhr.readyState == 4) {
        const responseObj = JSON.parse(xhr.responseText)
        console.log(responseObj)

        let output = ''
        for (let i = 0; i < responseObj.length; i++) {
            output += `
            <div>
                <img src="${responseObj[i].avatar_url}" />
                <h2>${responseObj[i].login}</h2>
                <a href="${responseObj[i].html_url}"></a>
            </div>
        `
        }

        document.getElementById('container').innerHTML = output
    }
}

// step 4 -  send the request
xhr.send()