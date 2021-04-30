import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://thikthok-backend.herokuapp.com/',
});

export default instance