import axios from 'axios'
import dotenv from 'dotenv'
import { paginador } from '../utils/paginador.js'
import { InvalidPriceException } from '../exceptions/InvalidPriceException.js'

dotenv.config()
const tipo = 'products'
const url = process.env.URL_API + tipo

const host = process.env.HOST + ':' + process.env.PORT + '/api/v1/' + tipo + '/'

const getProductsModel = async (minPrice, maxPrice, page, limit) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(async (response) => {

        try {
          let result
          const { data } = response
          if ((minPrice === undefined || minPrice === null) && (maxPrice === undefined || maxPrice === null)) {
            result = await paginador(host, data, page, limit)
          } else if (minPrice === undefined || minPrice === null) {
            const filtrado = data.filter((product) => {
              return product.price <= maxPrice
            })
            result = await paginador(host, filtrado, page, limit)
          } else if (maxPrice === undefined || maxPrice === null) {
            const filtrado = data.filter((product) => {
              return product.price >= minPrice
            })
            result = await paginador(host, filtrado, page, limit)
          } else if (minPrice > maxPrice) {
            reject(new InvalidPriceException('El precio mínimo debe ser menor o igual al precio máximo'))
          } else if (minPrice < 0 || maxPrice < 0) {
            reject(new InvalidPriceException('El precio debe ser mayor o igual a 0'))
          } else if (minPrice === maxPrice) {
            const filtrado = data.filter((product) => {
              return product.price === minPrice
            })
            result = await paginador(host, filtrado, page, limit)
          } else {
            const filtrado = data.filter((product) => {
              return product.price >= minPrice && product.price <= maxPrice
            })
            result = await paginador(host, filtrado, page, limit)
          }
          resolve(result)
        } catch (error) {
          reject(error.message)
        }
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
