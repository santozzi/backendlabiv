import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()
const tipo = 'products'
const url = process.env.URL_API + tipo

const getProductsModel = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error.message)
      })
  })
}

const getProductByIdModel = async (id) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: `${url}/${id}`
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

export { getProductsModel, getProductByIdModel }
