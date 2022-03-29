import express from "express";
import { ProductController } from "../controller/ProductController";


export const userRouter = express.Router();

const productController = new ProductController();

userRouter.post("/signup", productController.signup);
userRouter.get("/products", productController.login);