"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const defaultRoutes = (0, express_1.Router)();
//el Requiest y el Response tiene que ser desde Express, si no arrojara error
defaultRoutes.get('/', (req, res) => {
    return res.json({
        ok: true,
        msj: "todo funciona perfecto"
    });
});
exports.default = defaultRoutes; //aqui exportamos el objeto que declaramos 
