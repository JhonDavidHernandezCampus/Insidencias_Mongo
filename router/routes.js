import { Router } from "express";
const routes = Router();


routes.use('/',()=>{
    console.log("llega a rotes");
})


export default routes;

