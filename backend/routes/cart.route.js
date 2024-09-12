const express=require("express");

const router=express.Router();
const {addToCart}=require("../controller/cart.controller")

router.post("/addToCart",addToCart);

module.exports=router;