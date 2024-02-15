import Router from 'express';
import {getAll, getOne, insertOne, updateOne, deleteOne} from '../controllers/products.controller.js';
const router = Router();

router.get('/',getAll)
router.get('/:barcode',getOne)
router.post('/',insertOne)
router.post('/:barcode',updateOne)
router.post('/:barcode/delete', deleteOne)
export default router;