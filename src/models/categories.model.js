import axios from 'axios'
import dotenv from 'dotenv'
import { paginador } from '../utils/paginador.js'

dotenv.config()
const tipo = 'categories'
const url = process.env.URL_API + tipo

const host = process.env.HOST + ':' + process.env.PORT + '/api/v1/' + tipo + '/'

const getCategoriesModel = async (page, limit) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(async (response) => {
        console.log('page: ', page, 'limit: ', limit, response.data)

        const result = await paginador(host, response.data, page, limit)
        resolve(result)
      })
      .catch((error) => {
        reject(error.message)
      })
  })
}

const getCategoryByIdModel = async (id) => {
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

export { getCategoriesModel, getCategoryByIdModel }
