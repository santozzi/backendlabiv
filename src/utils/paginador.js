import { InvalidNumberPageException, } from '../exceptions/InvalidNumberPageException.js'
import { InvalidNumberLimitException } from '../exceptions/InvalidNumberLimitException.js'
const paginador = (url, data, page, limit = 10) => {
  return new Promise((resolve, reject) => {
    const count = data.length
    const pages = Math.ceil(count / limit)
    let info
    let result

   
   if(isNaN(limit)){
      reject(new InvalidNumberLimitException('El límite debe ser un número'))
   }else if(limit <= 0){
      reject(new InvalidNumberLimitException('El límite debe ser mayor que 0'))
   }else if (page === undefined || page === null) {
      info = {
        count,
        pages: 1,
        next: null,
        prev: null
      }
      result = {
        info,
        results: data
      }
    }else if (isNaN(page)){
      reject(new InvalidNumberPageException('La página debe ser un número'))
    } else if(page <= 0){
      reject(new InvalidNumberPageException('La página debe ser mayor que 0'))
    } else if (page > pages){
      reject(new InvalidNumberPageException('La página no puede ser mayor que el número de páginas'))
    } else {
      info = {
        count,
        pages,
        next:
          pages !== page
            ? `${url}?page=${Number(page) + 1}&limit=${limit}`
            : null,
        prev: page > 1 ? `${url}?page=${page - 1}&limit=${limit}` : null
      }

      const inicio = (page - 1) * limit
      let fin = page * limit
      if (page === pages) {
        fin = count - 1
      }
      const results = data.slice(inicio, fin)
      result = {
        info,
        results
      }
    }
    resolve(result)
  })
}
export { paginador }
