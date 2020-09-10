import axios from 'axios'

const Axios = axios.create({
  baseURL: 'http://localhost:8081',
  timeout: 8000,
  headers: {
    'accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

Axios.interceptors.request.use(
  config => {
    config.headers.common['Authorization'] = localStorage.getItem('token')
    return config
  },
  error => {
    console.log(error)
  }
)

export default Axios
