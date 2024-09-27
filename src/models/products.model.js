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
          } else {
            if ((minPrice === undefined || minPrice === null) || (maxPrice === undefined || maxPrice === null)){
              throw new InvalidPriceException('Ingrese ambos precios')
            } else if (isNaN(minPrice) || isNaN(maxPrice)) {
              throw new InvalidPriceException('Los precios deben ser números')
            } else if (Number(minPrice) < 0 || Number(maxPrice) < 0) {
              throw new InvalidPriceException('Los precios deben ser mayores o iguales a 0')
            } else if (Number(minPrice) > Number(maxPrice)) {
              throw new InvalidPriceException('El precio mínimo debe ser menor o igual al precio máximo')
            } else {
              const filtrado = data.filter((product) => {
                return product.price >= minPrice && product.price <= maxPrice
              })

              const filtro = `&minPrice=${minPrice}&maxPrice=${maxPrice}`
              result = await paginador(host, filtrado, page, limit, filtro)
            }
          }
          resolve(result)
        } catch (error) {
          reject(error)
        }
      })
      .catch((error) => {
        reject(error)
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
