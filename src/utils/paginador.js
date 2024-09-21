const paginador = (url, data, page = 0, limit = 50) => {
  return new Promise((resolve, reject) => {
    const count = data.length
    const pages = Math.ceil(count / limit)
    console.log('estoy en el paginador', page, limit)

    if (page === 0) {
      const info = {
        count,
        pages: 1,
        // TODO: verificar que la pagina no sea la primera para que funcione el prev y que no sea la ultima para que funcione el next
        next: null,
        prev: null
      }
      const result = {
        info,
        datafiltrada: data
      }
      resolve(result)
    } else {
      const info = {
        count,
        pages,
        // TODO: verificar que la pagina no sea la primera para que funcione el prev y que no sea la ultima para que funcione el next
        next: `${url}?page=${Number(page) + 1}&limit=${limit}`,
        prev: `${url}?page=${page - 1}&limit=${limit}`
      }
      const inicio = (page - 1) * limit
      let fin = page * limit
      if (page === pages) {
        fin = count - 1
      }
      const datafiltrada = data.slice(inicio, fin)
      const result = {
        info,
        datafiltrada
      }
      resolve(result)
    }
  })
}
export { paginador }
