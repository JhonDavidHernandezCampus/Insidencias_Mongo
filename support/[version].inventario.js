import { getInventarioAll } from "./../controller/v1/controllerInventario.js"
import { getInventarioAll_v2 } from "../controller/v2/controllerInventario_v2.js"


let getInventarioAllVersion = {
    "1.0.0":getInventarioAll,
    "~2.0.0":getInventarioAll_v2,
}

export {
    getInventarioAllVersion,
}