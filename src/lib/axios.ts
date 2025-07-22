import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // You can add headers or modify request here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle errors here
    return Promise.reject(error);
  }
);

export default api;
