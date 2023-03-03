"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRoutes = (0, express_1.Router)();
userRoutes.post('/', (req, res) => {
    console.log(req.body);
});
exports.default = userRoutes; //siempre hay que exportar las rutas
