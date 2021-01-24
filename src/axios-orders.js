import axios from 'axios'

const instance= axios.create({
    baseURL:'https://burger-king-3cc1c-default-rtdb.firebaseio.com/'
})

export default instance;

