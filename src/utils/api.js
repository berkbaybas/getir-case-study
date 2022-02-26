import axios from 'axios'

const api = axios.create({
  // baseURL: 'https://my-json-server.typicode.com/berkbaybas/todoserver',
  baseURL: ' http://localhost:3000',
  responseType: 'json'
})

export default api
