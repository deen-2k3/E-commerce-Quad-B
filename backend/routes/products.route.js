const express =require("express");

const router=express.Router();
const upload=require("../middlewares/multer");


const {createProduct} =require("../controller/product.controller");

router.post("/createProduct",createProduct);

module.exports =router;
