const url = ""

function getUsers() {
    fetch(url)
        .then(response => response.json())
        .then(data => renderApiResult.textContent = JSON.stringify(data))
        .catch(error => console.error(error))
}

function getUser() {
    fetch(`${url}`)
        .then(response => response.json())
        .then( data => {
            userName.textContent = data.name
            userCity.textContent = data.location
            userAvatar.src = data.avatar_url
        })
        .catch(error => console.error(error))
}

function addUser(newUser) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json;charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

const newUser = {
    name: 'Olivia Zars',
    avatar: 'https://picsum.photos/200/300',
    city: 'Rio do Sul'
}
// addUser(newUser)

getUsers()
getUser()