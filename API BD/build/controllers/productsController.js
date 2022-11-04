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
class ProductsController {
    //Metodo para listar productos
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield database_1.default.query("SELECT * from producto");
            resp.json(product);
        });
    }
    //Metodo para listar un solo producto
    getOne(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params; // se recupera el id de request params.
            const products = yield database_1.default.query("SELECT * FROM producto WHERE idproducto = ?", [id]);
            if (products.length > 0) {
                return resp.json(products[0]);
            }
            resp.status(404).json({ text: "El producto no existe" });
        });
    }
    //Metodo para agregar un producto
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("INSERT INTO producto set ?", [req.body]);
            resp.json({ text: "Producto Agregado" });
        });
    }
    //Metodo para eliminar un producto
    delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query("DELETE FROM producto WHERE idproducto = ?", [id]);
            resp.json({ text: "El producto ha sido borrado" });
        });
    }
    //Metodo para actualizar un producto
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query("UPDATE producto set ? WHERE idproducto = ?", [
                req.body,
                id,
            ]);
            resp.json({ text: "Producto Actualizado" });
        });
    }
}
const productsController = new ProductsController();
exports.default = productsController;
