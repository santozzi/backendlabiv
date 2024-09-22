import express from 'express'
import users from '../routes/users.routes.js'
import products from '../routes/products.routes.js'
import categories from '../routes/categories.routes.js'
import auth from '../routes/auth.routes.js'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT || 3001
    this.middleware()
    this.cors()
    this.rutas()
  }

  cors () {
    this.app.use(cors())
  }

  middleware () {
    // this.app.use('/', express.static('public'))
    this.app.use(express.json())
  }

  rutas () {
    this.app.use('/api/v1/users', users)
    this.app.use('/api/v1/products', products)
    this.app.use('/api/v1/categories', categories)
    this.app.use('/api/v1/auth', auth)
    // aca van las otras rutas
    this.app.use('*', (req, res) => {
      res.status(404).send('page not found')
    })
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(
        `Server running on port ${this.port}, host: ${process.env.HOST}:${this.port}`
      )
    })
  }
}

export default Server
