import axios from 'axios'

const domain = 'http://127.0.0.1:8000/api'

export const customFetch = axios.create({
  baseURL: domain,
})

customFetch.interceptors.request.use(async (config) => {
  const access_token = JSON.parse(localStorage.getItem('access_token'))

  if (access_token) {
    config.headers['Authorization'] = `Bearer ${access_token}`
  }
  return config
})

customFetch.defaults.withCredentials = true
