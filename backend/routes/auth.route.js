const express =require("express");
const { signup ,} = require("../controller/Auth");
const router=express.Router()

router.post("/register",signup);

module.exports =router;














