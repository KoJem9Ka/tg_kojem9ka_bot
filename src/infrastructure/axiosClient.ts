import axios, { AxiosError } from 'axios'

const axiosClient = (() => {
  const instance = axios.create({
    // baseURL: 'http://192.168.1.230:5000',
    // headers: { 'Content-Type': 'application/json' },
  })

  // instance.interceptors.request.use(config => config)

  // instance.interceptors.response.use(
  //   value => value,
  //   async (error: AxiosError) => {
  //     await Promise.reject(error)
  //   },
  // )

  return instance
})()

export default axiosClient
