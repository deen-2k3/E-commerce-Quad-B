const express =require("express");

const router=express.Router();
const upload=require("../middlewares/multer");


const {createProduct, getAllProduct,getCategoryProduct,deleteProduct} =require("../controller/product.controller");

router.post("/createProduct",createProduct);
router.get("/getAllProduct",getAllProduct);
router.post("/getProductByCategory",getCategoryProduct);
router.delete("/deleteProduct",deleteProduct);



module.exports =router;
