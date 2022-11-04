"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const keysPr_1 = __importDefault(require("./keysPr"));
const pool = promise_mysql_1.default.createPool(keysPr_1.default.database);
pool.getConnection().then((connection) => {
    pool.releaseConnection(connection);
    console.log("JALA LA BASE DE DATOS");
});
exports.default = pool;
