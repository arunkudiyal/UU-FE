// create object of XMLHttpRequest
const xhr = new XMLHttpRequest()
// define the URL
const url = 'https://api.github.com/users'
console.log(xhr.readyState)         // 0
// open a portal of communication
xhr.open('GET', url)
console.log(xhr.readyState)         // 1
// exec onreadystatechange --> aysnc
xhr.onreadystatechange = () => {
    console.log(xhr.readyState)         // 2, 3, 4
    if(xhr.readyState == 4 && xhr.status == 200) {
        const respObj = JSON.parse( xhr.responseText )
        console.log(respObj)
        let output = ''
        for(let i=0; i < respObj.length; i++) {
            output += `
                <div>
                    <img src='${respObj[i].avatar_url}' /> <br />
                    <h3>@${respObj[i].login}</h3>
                    <h5>ID - ${respObj[i].node_id}</h5>
                </div>
            `
        }
        document.getElementById('my-div').innerHTML = output
    }
}

// send the req
xhr.send()