import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/photos'
});

export default Api