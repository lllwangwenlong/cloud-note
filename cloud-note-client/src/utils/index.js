import axios from 'axios';

const env = process.env.NODE_ENV//在生产环境的时候,将会被设置成production
                                //在开发环境下,将会被设置成development
let baseURL = env == 'development' ? 'api' : '/'

const instance = axios.create({
  baseURL,
  timeout: 15000
})


const xhr = {
  get(url, data, config) {
    return new Promise((resolve, reject) => {
      instance.get(url, {params: data}, config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  fetch(url, data, config, methods) {
    return new Promise((resolve, reject) => {
      instance[methods](url, data, config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  post(url, data, config) {
    return this.fetch(url, data, config, 'post')
  }
}

export default xhr
