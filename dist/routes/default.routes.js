"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const defaultRoutes = (0, express_1.Router)();
//el Requiest y el Response tiene que ser desde Express, si no arrojara error
defaultRoutes.get('/', (req, res) => {
});
