import Server from "./classes/server";
import defaultRoutes from "./routes/default.routes";


const server = new Server();//intanciar objeto de clase server 


server.app.use('/',defaultRoutes);//rutas por defecto 

server.Start(()=>{
    console.log(`Servidor corriendo en puerto:${server.port}`)
})