import express from 'express';
// import { jwtVerified } from '';
import {
    productCreate,
    productDeleteAll,
    productDeleteOne,
    productGetAll,
    productGetOne,
    productUpdate
} from '../controller/product.controller.js';
import { upload } from '../middleware/multer.middleware.js'

const router = express.Router();

router.post("/product-create",upload.single('image'),productCreate);

router.put("/product-update",upload.single('image'), productUpdate);
router.get("/product-get-one", productGetOne);
router.get("/product-get-all", productGetAll);
router.delete("/product-delete-one", productDeleteOne);
router.delete("/product-delete-all", productDeleteAll);

export default router;