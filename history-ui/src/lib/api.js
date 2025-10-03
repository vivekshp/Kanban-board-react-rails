import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials:true,
    headers: {'Content-Type': 'application/json','Accept': 'application/json'},
})

export const getHistories = (params = {}) =>
  api.get('/api/history/histories', { params }).then(r => r.data);