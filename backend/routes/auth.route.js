const express =require("express");
const { signup, login,logout } = require("../controller/Auth");
const router=express.Router()

router.post("/register",signup);
router.post("/login",login)
router.get("/logout",logout)

module.exports =router;














