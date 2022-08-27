"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const client_1 = require("../prisma/client");
const bot_1 = require("./bot");
console.clear();
exports.prisma = new client_1.PrismaClient();
void (0, bot_1.activateBot)();
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.json({ 'message': 'ok' });
});
// @ts-ignore
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ 'message': err.message });
    return;
});
// app.listen( port, () => {
//   console.log( `Example app listening at http://localhost:${port}` )
// } )
