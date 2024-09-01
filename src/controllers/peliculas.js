const getPeliculas = (req, res) => {
    res.json({name: 'controlador de peliculas'});
}

const getEstrenos = (req, res) => {
    res.json({name: 'controlador de estrenos'});
}

const getPopulares = (req, res) => {
    res.json({name: 'controlador de populares'});
}

export {
    getPeliculas,
    getEstrenos,
    getPopulares
}