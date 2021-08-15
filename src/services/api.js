import axios from 'axios';

const api = axios.create({
  baseURL: 'https://p3backend-11211.herokuapp.com',
});

export default api;
