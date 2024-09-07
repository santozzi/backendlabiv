import { request, response } from 'express'
import { getEmpleadosModel } from '../models/empleados.models.js'

const getUsersByLastname = async (req = request, res = response) => {
  const { lastname } = req.query

  try {
    const data = await getUsersByLastnameModel(lastname)
    res.status(200).json({
      msg: 'Ok',
      data
    })
  } catch (error) {
    res.status(400).json({
      msg: error,
      data: []
    })
  }
}

const getUsers = async (req = request, res = response) => {
  //TODO: verificar si el body es un usuario
    const user = req.body

    try {
        const data = await getUsersModel()
        res.status(200).json({
          msg: 'Ok',
          data
        })
      } catch (error) {
        res.status(400).json({
          msg: error,
          data: []
        })
      }
}

export {
  getEmpleados,
  getEmpleado
}
