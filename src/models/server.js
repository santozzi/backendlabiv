import express from 'express';
import peliculas from '../routes/peliculas.js';
import empleados from '../routes/empleados.js';

class Server {
    constructor(){
            this.app = express();
            this.port = process.env.PORT;
            this.middleware();
            this.rutas();
    }

    middleware(){
        this.app.use("/", express.static('public'));
    }

    rutas(){
        this.app.use('/api/v1/peliculas', peliculas); 
        this.app.use('/api/v1/empleados', empleados); 
        // this.app.use('*', (req, res) => {
        //     res.status(404).send('page not found');
        // });
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}

export default Server;