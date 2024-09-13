const express =require("express");
const { signup, login,logout ,forgotPassword} = require("../controller/Auth");
const router=express.Router()

router.post("/register",signup);
router.post("/login",login)
router.get("/logout",logout);
router.post("/forgotPassword",forgotPassword)

module.exports =router;














