"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productControllers_1 = require("../controllers/productControllers");
const router = (0, express_1.Router)();
router.get('/products', productControllers_1.getAllProducts);
router.get('/id/:id', productControllers_1.getProductsById);
router.get('/name/:name', productControllers_1.getProductsByName);
exports.default = router;
//# sourceMappingURL=productsRoutes.js.map