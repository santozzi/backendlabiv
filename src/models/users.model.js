import axios from 'axios'
import dotenv from 'dotenv'
import { paginador } from '../utils/paginador.js'
import { InvalidUserIdException } from '../exceptions/InvalidUserIdException.js'

dotenv.config()
const tipo = 'users'
const url = process.env.URL_API + tipo
let port = ':' + process.env.PORT
if (process.env.PORT === undefined) { port = '' }
const host =
  process.env.HOST + port + '/api/v1/' + tipo + '/'


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
        if (error.response.data.message.includes('Could not find any entity of type "User"')) {
          reject(new InvalidUserIdException('El usuario no existe'))
        }
        reject(error)
      })
  })
}

const getUsersModel = async (page, limit, nombre) => {
  console.log(host)
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
            const filtrado = data.filter((usuario) => usuario.name.toLowerCase().includes(nombre.toLowerCase())
            )
            console.log(filtrado)

            result = await paginador(host, filtrado, page, limit)
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

export { getUserByIdModel, getUsersModel }
