import axios from 'axios';
import {request, response} from 'express';
import { getEmpleadosModel} from '../models/empleados.models.js';

const  getEmpleados =  async(req = request, res = response) => {
    const { lastname} = req.query;

    try {
        const data = await getEmpleadosModel(lastname);
        res.status(200).json({
            msg: 'Ok',
            data
        });
    } catch (error) {
        res.status(400).json({
            msg: 'Error',
            error
        });
    }

        
        
    
    
    
  



}

const getEmpleado = (req = request, res = response) =>{

    const { idEmpleado } = req.params;
    console.log(idEmpleado);
    
    axios.get(`https://66c78f59732bf1b79fa6e8c7.mockapi.io/api/v1/empleados/${idEmpleado}`)
    .then( (response) => {
        const { data } = response;
        res.status(200).json({
            msg: 'Ok',
            data
        })
    })
    .catch( (error) => {
        // handle error
        console.log(error);
        res.status(400).json({
            msg: 'Error',
            error
        })
    })   
}

export {
    getEmpleados,
    getEmpleado, 
}