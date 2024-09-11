const Product =require("../models/product.model");


exports.createProduct=async(req,res)=>{
    try {
        const {productTitle,productDescription,originalPrice,discountPrice,measurements,color,availability,category}=req.body;

        if(!productTitle || !productDescription || !originalPrice || !discountPrice || !measurements || !color || !availability || !category){
            return res.status(403).json({
                success:false,
                message:"all fields are required."
            })
        }

        const product=await Product.create({
            productTitle,
            productDescription,
            originalPrice,
            discountPrice,
            measurements,
            availability,
            category
        });

    } catch (error) {
        
    }
}