const express=require("express");

const router=express.Router();
const {addToCart}=require("../controller/cart.controller");
const { auth } = require("../middlewares/auth");



router.post("/addToCart/:id",auth,addToCart);

module.exports=router;