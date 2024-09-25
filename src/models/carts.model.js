import axios from 'axios'
import dotenv from 'dotenv'
import { paginador } from '../utils/paginador.js'
import { InvalidUserIdException } from '../exceptions/InvalidUserIdException.js'

dotenv.config()
const tipo = 'carts'
const url = process.env.URL_API_CARRITO + tipo

const host = process.env.HOST + ':' + process.env.PORT + '/api/v1/' + tipo + '/'

const getCartsModel = async (userId, page, limit) => {
  return new Promise((resolve, reject) => {
    if (userId === undefined || userId === null) {
      axios
        .get(url)
        .then(async (response) => {
          console.log('userId: ', userId, 'page: ', page, 'limit: ', limit, response.data)

          const result = await paginador(host, response.data, page, limit)
          resolve(result)
        })
        .catch((error) => {
          reject(error.message)
        })
    } else if (isNaN(userId)) {
      reject(new InvalidUserIdException('El id de usuario debe ser un número'))
    } else if (userId <= 0) {
      reject(new InvalidUserIdException('El id de usuario debe ser mayor que 0'))
    } else {
      axios({
        method: 'get',
        url: `${url}/user/${userId}`
      })
        .then(async (response) => {
          console.log('page: ', page, 'limit: ', limit, response.data)

          const result = await paginador(host, response.data, page, limit)
          resolve(result)
        })
        .catch((error) => {
          reject(error.message)
        })
    }
  })
}

const getCartByIdModel = async (id) => {
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

export { getCartsModel, getCartByIdModel }
