import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
const url = process.env.URL_MOCKAPI;



const tipo = "empleados";
const getEmpleadosModel = async(lastname) => {
   return new Promise((resolve, reject) => {
    axios.get(url+tipo, {
        params:{
            lastname
        }
    })
    .then((response) => {
        const { data } = response;
        resolve(data);
    })
    .catch((error) => {
        reject(error.message);
    })
   });

}
export {
    getEmpleadosModel
}