import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'

class Request {
  instance: any
  constructor(baseURL: any, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    this.instance.interceptors.request.use(
      (config: any) => {
        return config
      },
      (err: any) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res: any) => {
        return res
      },
      (err: any) => {
        return err
      }
    )
  }

  request(config: any) {
    // mainStore.isLoading = true
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res: any) => {
          resolve(res.data)
        })
        .catch((err: any) => {
          reject(err)
        })
    })
  }

  get(config: any) {
    return this.request({ ...config, method: 'get' })
  }

  post(config: any) {
    return this.request({ ...config, method: 'post' })
  }
}

export default new Request(BASE_URL, TIMEOUT)
