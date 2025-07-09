import express from 'express';
import { getAllUser, register, userDelete, userLogin } from '../controller/user.controller.js';
import { jwtVerified } from '../middleware/jwt.middleware.js';

const router = express.Router();

router.post("/register", register)
router.post("/login",userLogin)
router.get("/getAllUser", getAllUser)
router.delete("/userDelete",jwtVerified, userDelete)

export default router;