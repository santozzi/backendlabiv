import axios from 'axios';
const url = "https://66c78f59732bf1b79fa6e8c7.mockapi.io/api/v1/";
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