"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const default_routes_1 = __importDefault(require("./routes/default.routes"));
const server = new server_1.default(); //intanciar objeto de clase server 
server.app.use('/', default_routes_1.default); //rutas por defecto 
server.Start(() => {
    console.log(`Servidor corriendo en puerto:${server.port}`);
});
//para probar utilizar nodemon  y utlizar postman
