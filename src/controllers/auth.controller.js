import { request, response } from 'express'
import { getAuthLoginModel } from '../models/auth.model.js'

const getAuthLogin = async (req = request, res = response) => {
  try {
    const data = await getAuthLoginModel(req.body)
    res.status(200).json({
      msg: 'Ok',
      data
    })
  } catch (error) {
    res.status(400).json({
      msg: error.message,
      data: []
    })
  }
}

export { getAuthLogin }
