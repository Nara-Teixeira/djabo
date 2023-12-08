import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.10.175:3057',

  });

  export default api;