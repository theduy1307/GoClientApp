import constants from '@/utils/constants'
import axios from 'axios'
import router from '../router/index'

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
    Object.assign(config.headers, { Authorization: `Bearer ${accessToken}` })
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
    return Promise.reject(error)
  }
)

export default axiosClient
