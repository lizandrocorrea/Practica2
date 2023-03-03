import { Request, Response, Router } from "express";

const defaultRoutes = Router();

//el Requiest y el Response tiene que ser desde Express, si no arrojara error
defaultRoutes.get('/', (req:Request,res:Response)=>{

});
