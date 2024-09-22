import { request, response } from 'express'
import { getAuthProfileModel } from '../models/auth.model.js'
const authentication = async (req = request, res = response, next) => {
  try {
    const { authorization } = req.headers
    if (!authorization) {
      throw new Error('No token provided')
    }
    const token = authorization.split(' ')[1]

    const profile = await getAuthProfileModel(token)

    req.profile = profile
    next()
  } catch (error) {
    res.status(401).json({
      msg: error.message
    })
  }
}
export { authentication }
