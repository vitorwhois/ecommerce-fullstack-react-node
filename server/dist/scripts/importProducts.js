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
const mongoose_1 = __importDefault(require("mongoose"));
const product_1 = __importDefault(require("../models/product"));
const products_json_1 = __importDefault(require("../../../client/public/data/products.json"));
const dotenv_1 = __importDefault(require("dotenv"));
// Carregar variáveis de ambiente
dotenv_1.default.config();
const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
    console.error('A variável MONGO_URI não está definida no arquivo .env');
    process.exit(1);
}
const products = products_json_1.default.products;
mongoose_1.default.connect(mongoUri)
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield product_1.default.insertMany(products);
        console.log('Produtos inseridos com sucesso!');
        mongoose_1.default.connection.close();
    }
    catch (error) {
        console.error('Erro ao inserir produtos:', error);
    }
}))
    .catch(error => {
    console.error('Erro ao conectar ao MongoDB:', error);
});
//# sourceMappingURL=importProducts.js.map