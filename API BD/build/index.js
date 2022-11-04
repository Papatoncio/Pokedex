"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productsRoutes_1 = __importDefault(require("./routes/productsRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
console.log("WORKS");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.set("port", process.env.PORT || 3100);
    }
    routes() {
        this.app.use("/api/products", productsRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get("port"), () => {
            console.log("Servidor en el puerto", this.app.get("port"));
        });
    }
}
const server = new Server();
server.start();
