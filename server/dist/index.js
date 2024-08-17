"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const usersRoutes_1 = __importDefault(require("./routes/usersRoutes"));
const productsRoutes_1 = __importDefault(require("./routes/productsRoutes"));
const corsConfig_1 = __importDefault(require("./config/corsConfig"));
const dbConfig_1 = require("./config/dbConfig");
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middleware para analisar JSON
app.use(express_1.default.json());
app.use(corsConfig_1.default);
(0, dbConfig_1.connectDB)();
app.use('/api/users', usersRoutes_1.default);
app.use('/api/products', productsRoutes_1.default);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
//# sourceMappingURL=index.js.map