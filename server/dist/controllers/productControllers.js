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
exports.getProductsByName = exports.getProductsById = exports.getAllProducts = void 0;
const product_1 = __importDefault(require("../models/product"));
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_1.default.find({});
        res.status(200).json(products);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});
exports.getAllProducts = getAllProducts;
const getProductsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_1.default.findById(req.params.id);
        if (product) {
            res.json(product);
        }
        else {
            res.status(404).json({ message: 'Produto não encontrado' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao buscar produto' });
    }
});
exports.getProductsById = getProductsById;
const getProductsByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_1.default.find({ productName: req.params.name });
        if (products.length > 0) {
            res.json(products);
        }
        else {
            res.status(404).json({ message: 'Nenhum produto encontrado com esse nome' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao buscar produtos' });
    }
});
exports.getProductsByName = getProductsByName;
//# sourceMappingURL=productControllers.js.map