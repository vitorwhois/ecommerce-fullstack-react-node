import { Router } from 'express';
import { getAllProducts, getProductsById, getProductsByName} from '../controllers/productControllers'

const router = Router();

router.get('/products', getAllProducts);
router.get('/id/:id', getProductsById);
router.get('/name/:name', getProductsByName);


export default router;