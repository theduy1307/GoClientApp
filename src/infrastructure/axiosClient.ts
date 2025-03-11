import constants from '@/utils/constants'
import axios from 'axios'
const axiosClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  }
})
axiosClient.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem(constants.ACCESS_TOKEN)
    if (accessToken) {
      Object.assign(config.headers, { Authorization: `Bearer ${accessToken}` })
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error)
    if (error.response && error.response.status == 401) {
      //window.location.href = `/authentication/sign-in?redirect=${window.location.pathname}`
    }
    return Promise.reject(error)
  }
)

export default axiosClient
