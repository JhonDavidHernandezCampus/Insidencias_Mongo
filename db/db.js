import { MongoClient } from "mongodb";
import dotenv, { config } from 'dotenv';

dotenv.config();
const Conexion = async ()=>{
    let datos = JSON.parse(process.env.USER_DB);
    try {
        let url = `mongodb+srv://${datos.username}:${datos.password}@insidenciasdb.cwlfkhx.mongodb.net/${datos.database}`;
        let options = {
            useNewUrlParser:true,
            useUnifiedTopology:true
        }
        let conx = await MongoClient.connect(url, options);
        return conx.db();
    } catch (error) {
        console.log({message:"ha ocurrifo un error en la conexion de la base de datos", error:error});
    }
}

export default Conexion;