import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const url = process.env.URL_API
const tipo = 'users'

const getUsersByLastnameModel = async (lastname) => {
  return new Promise((resolve, reject) => {
    axios.get(url + tipo, {
      params: {
        lastname
      }
    })
      .then((response) => {
        const { data } = response
        resolve(data)
      })
      .catch((error) => {
        reject(error.message)
      })
  })
}
const getUsersModel = async () => {
    return new Promise((resolve, reject) => {
      axios.get(url + tipo)
        .then((response) => {
          const { data } = response
          resolve(data)
        })
        .catch((error) => {
          reject(error.message)
        })
    })
  }
export {
    getUsersModel,
    getUsersByLastnameModel
}
