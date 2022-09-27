"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class UsuarioController {
    //CONSULTAR USUARIOS
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarios = yield database_1.default.query('SELECT * FROM usuario');
            resp.json(usuarios);
        });
    }
    //CONSULTAR USUARIO POR ID
    getOne(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuarios = yield database_1.default.query('SELECT * FROM usuario WHERE idusuario = ?', [id]);
            if (usuarios.length > 0) {
                return resp.json(usuarios[0]);
            }
            resp.status(404).json({ text: 'EL USUARIO NO EXISTE' });
        });
    }
    //CREAR USUARIOS
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO usuario set ?', [req.body]);
            resp.json({ message: 'CREANDO UN USUARIO' });
        });
    }
    //BORRAR USUARIOS
    delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM usuario WHERE idusuario = ?', [id]);
            resp.json({ message: 'EL USUARIO SE HA ELIMINADO' });
        });
    }
    //ACTUALIZAR USUARIOS
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE usuario set ? WHERE idusuario = ?', [req.body, id]);
            resp.json({ message: 'SE ACTUALIZO EL USUARIO' });
        });
    }
}
const usuarioController = new UsuarioController();
exports.default = usuarioController;
