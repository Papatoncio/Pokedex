"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get("/", (req, resp) => {
            resp.send("Holis");
        });
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
