import express from 'express';
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from '../controllers/product.js';
import { verifyTokenAndAdmin } from '../controllers/verifyToken.js';

const router = express.Router();

router.post('/', verifyTokenAndAdmin, createProduct);
router.put('/:id', verifyTokenAndAdmin, updateProduct);
router.delete('/:id', verifyTokenAndAdmin, deleteProduct);
router.get('/find/:id', getProduct);
router.get('/', getAllProducts);

export default router;
