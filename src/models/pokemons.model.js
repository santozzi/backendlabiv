import axios from 'axios'
import dotenv from 'dotenv'
//import { paginador } from '../utils/paginador.js'
dotenv.config()
const tipo = 'pokemon'
const url = process.env.URL_API + tipo
//const host =  process.env.HOST + ':' + process.env.PORT + '/api/v1/' + tipo + '/paginacion'

const getPokemonByIdModel = async (id) => {
  console.log('ide de model', id)

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
const getPokemonsModel = async () => {
  return new Promise((resolve, reject) => {
 
    console.log('estoy en el model ',url);
    
    axios
      .get(url)
      .then((response) => {
        //const result = paginador(host, response.data, page, limit)
        resolve(response)
      })
      .catch((error) => {
        reject(error.message)
      })
  })
}

export { getPokemonsModel, getPokemonByIdModel }
