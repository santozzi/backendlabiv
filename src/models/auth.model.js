import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()
const tipo = 'auth'
const url = process.env.URL_API + tipo

const getAuthLoginModel = async (data) => {
  console.log(`${url}/login/`)

  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: `${url}/login/`,
      data
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

const getAuthProfileModel = async (token) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        url + '/profile',
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )
      .then((response) => {
        try {
          resolve(response.data)
        } catch (error) {
          reject(error)
        }
      })
      .catch((error) => {
        reject(error.message)
      })
  })
}

export { getAuthLoginModel, getAuthProfileModel }
