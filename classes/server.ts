import express from 'express'

export default class Server{
    public app: express.Application;
    public port: number = 3000;

    constructor(){
        this.app=express();
    }
//el metodo Start es para inicializar el servidor 

    Start(callback:Function){
        this.app.listen(this.port,callback())
    }

}