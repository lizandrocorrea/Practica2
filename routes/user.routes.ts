import { Request, Response, Router } from "express";

const userRoutes = Router();

userRoutes.post('/', (req:Request,res:Response)=>{
    console.log(req.body)
})

export default userRoutes //siempre hay que exportar las rutas