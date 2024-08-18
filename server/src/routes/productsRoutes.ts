import { Router } from 'express';
import { getAllProducts, getProductsById, getProductsByName, createProduct, updateProduct, deleteProduct } from '../controllers/productControllers';

const router = Router();

router.get('/products', getAllProducts);
router.get('/id/:id', getProductsById);
router.get('/name/:name', getProductsByName);
router.post('/products', createProduct);   
router.put('/id/:id', updateProduct);
router.delete('/id/:id', deleteProduct);

export default router;