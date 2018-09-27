import axios from 'axios';


var instance = axios.create({
  baseURL: '/api',
  timeout: 5000
})

const xhr = {
  post(url, data, config) {
    return new Promise((resolve, reject) => {
      instance.post(url, data, config).then(res =>{
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export const $axios = xhr
