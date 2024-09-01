import express from 'express';
//import peliculas from '../routes/peliculas';
class Server{
    
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.middleware();
        //this.rutas();

        
    }
    middleware(){
        this.app.use("/",express.static('public'));
    }

    rutas(){
       // this.app.use('/api/v1/peculas',peliculas)
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`La API est escuchando el puerto ${this.port}`);
            
        })
    }
}
export default Server;