import axios from 'axios'

function addUser(data) {
    axios.post('/user',
        new FormData(data)
    ).then(res => {
        console.log(res)
    })
}