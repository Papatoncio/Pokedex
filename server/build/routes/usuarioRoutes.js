"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioControllers_1 = __importDefault(require("../controllers/usuarioControllers"));
class UsuarioRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //Obtener Usuarios (METODO GET)
        this.router.get('/', usuarioControllers_1.default.list);
        //Obtener Usuario por ID
        this.router.get('/:id', usuarioControllers_1.default.getOne);
        //Crear Usuarios (METODO POST)
        this.router.post('/', usuarioControllers_1.default.create);
        //Eliminar Usuarios (METODO DELETE)
        this.router.delete('/:id', usuarioControllers_1.default.delete);
        //Actualizar Usuarios (METODO PUT)
        this.router.put('/:id', usuarioControllers_1.default.update);
    }
}
const usuarioRoutes = new UsuarioRoutes();
exports.default = usuarioRoutes.router;
