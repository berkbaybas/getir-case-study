import axios from 'axios'

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/berkbaybas/todoserver',
  responseType: 'json'
})

export default api
