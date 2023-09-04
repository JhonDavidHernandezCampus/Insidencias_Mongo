import { Router } from "express";
import limit from "../middleware/limit.js";
import routesVersioning from "express-routes-versioning";
import {getInventarioAllVersion} from '../support/[version].inventario.js';

const routes = Router();
const version = routesVersioning();

routes.use('/Inventario',limit,version(getInventarioAllVersion));


export default routes;

