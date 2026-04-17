// step 1 - create the object of XHR
const xhr = new XMLHttpRequest()
const url = 'https://api.github.com/users'
console.log(`Ready State - ${xhr.readyState}`)
// step 2 - open the portal of comm
xhr.open('GET', url)
console.log(`Ready State - ${xhr.readyState}`)
// step 3 - 
xhr.onreadystatechange = () => {
    console.log(`Ready State - ${xhr.readyState}`)
    let output = ''
    if (xhr.readyState == 4 && xhr.status == 200) {
        const resp = JSON.parse(xhr.responseText)
        console.log(resp)
        for (let i = 0; i < resp.length; i++) {
            output += `
                <div>
                    <img style="width: 250px; height:250px;" src="${resp[i].avatar_url}" />
                    <h3>${resp[i].login}</h3>
                    <a target="_blank" href="${resp[i].html_url}">GitHub Profile</a>
                </div>
                <hr />
            `
        }
        console.log(output)
        // add to the UI
        document.getElementById('container').innerHTML = output
    }
}

xhr.send()
