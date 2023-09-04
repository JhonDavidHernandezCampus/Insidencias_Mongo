import Conexion from '../../db/db.js';


const getInventarioAll = (req,res)=>{
    res.send("Paso a la version 1.0.0");
    console.log("Lllego al get de inventario en la vercion 1.0.0 ");
}


export {
    getInventarioAll,
}