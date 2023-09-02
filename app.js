import express from "express";
import dotenv from "dotenv";
import router from "./router/routes.js";

const appExpress = express();
dotenv.config();

appExpress.use(express.json());
appExpress.use(express.text());

appExpress.use('/', router);

let config = JSON.parse(process.env.SERVE);

config = {
    port: config.port,
    localhost:config.host
}
appExpress.listen(config,()=>{
    console.log(`http://${config.localhost}:${config.port}`);
})

