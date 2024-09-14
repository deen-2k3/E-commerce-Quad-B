// importing express module
const express =require("express");
//Initializing the router object from express
const router=express.Router();
const upload=require("../middlewares/multer");

//destructuring product-related controller functions
const {createProduct, getAllProduct,getCategoryProduct,deleteProduct} =require("../controller/product.controller");
// route to handle creating a new product 
router.post("/createProduct",createProduct);
//route to retrieve all product
router.get("/getAllProduct",getAllProduct);
// route to retrieve poducts by category 
router.post("/getProductByCategory",getCategoryProduct);

//route to delete a product 
router.delete("/deleteProduct",deleteProduct);


//exporting the router to be used in other files
module.exports =router;
