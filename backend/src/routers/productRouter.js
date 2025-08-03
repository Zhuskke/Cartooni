import express from 'express';
import { createProduct, deleteProduct, editProduct, getAllProducts, getProduct } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.get('/', getAllProducts);
productRouter.get('/:id', getProduct);
productRouter.post('/', createProduct);
productRouter.put('/:id', editProduct);
productRouter.delete('/:id', deleteProduct);

export default productRouter
