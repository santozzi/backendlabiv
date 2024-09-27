import axios from 'axios'
import dotenv from 'dotenv'
import { paginador } from '../utils/paginador.js'

dotenv.config()
const tipo = 'users'
const url = process.env.URL_API + tipo

const host = process.env.HOST + ':' + process.env.PORT + '/api/v1/' + tipo + '/'

const getUserByIdModel = async (id) => {
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

const getUsersModel = async (page, limit, nombre) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(async (response) => {
        try {
          let result
          const { data } = response
          if (nombre === undefined || nombre === null) {
            result = await paginador(host, data, page, limit)
          } else {
            const filtrado = data.filter((usuario) => (usuario.name).includes(nombre))

            result = await paginador(host, filtrado, page, limit)
          }

          resolve(result)
        } catch (error) {
          reject(error)
        }
      })
      .catch((error) => {
        reject(error.message)
      })
  })
}

export { getUserByIdModel, getUsersModel }
