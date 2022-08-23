// Promises com Axios
import axios from 'axios'

axios
    .get('https://api.github.com/users/MayconTrix')
    .then(response => axios.get(response.data.repos_url))
    .then(repos => console.log(repos.data))
    .catch( error => console.log(error))

// Executando promessas em paralelo com Promise.all

import axios from 'axios'

Promise.all([
    axios.get('https://api.github.com/users/MayconTrix'),
    axios.get('https://api.github.com/users/MayconTrix/repos')
])
.then(responses => {
    console.log(responses[0].data.login)
    console.log(responses[1].data.length)
})
    .catch(err => console.log(err.message))