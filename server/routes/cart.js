import express from 'express';
import {
  createCart,
  deleteCart,
  getAllCarts,
  getUserCart,
  updateCart,
} from '../controllers/cart.js';
import {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from '../controllers/verifyToken.js';

const router = express.Router();

router.post('/', verifyToken, createCart);
router.put('/:id', verifyTokenAndAuthorization, updateCart);
router.delete('/:id', verifyTokenAndAuthorization, deleteCart);
router.get('/find/:userId', verifyTokenAndAuthorization, getUserCart);
router.get('/', verifyTokenAndAdmin, getAllCarts);

export default router;
