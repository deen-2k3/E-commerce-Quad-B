const Product =require("../models/product.model");
const {uploadImageToCloudinary} = require("../utils/imageUploader");


exports.createProduct=async(req,res)=>{
    try {
        const {productTitle,productDescription,originalPrice,discountPrice,measurements,availability,category}=req.body;

        console.log(productTitle);

        if(!productTitle || !productDescription || !originalPrice || !discountPrice || !measurements || !availability || !category){
            return res.status(403).json({
                success:false,
                message:"all fields are required."
            })
        }
        const file=req.file;
        const fileUri =getDataUri(file);
        const cloudResponse = await cloudinary.uploader.upload(fileUri.content);

        const product=await Product.create({
            productTitle,
            productDescription,
            originalPrice,
            discountPrice,
            measurements,
            availability,
            category,
            productImages:cloudResponse.secure_url

            
        });
        // let images=[];
        // for(const img of req.files){
        //     const url=(await uploadImageToCloudinary(img,process.env.FOLDER_NAME)).secure_url;
        //     images.push(url);
        // }

        // product.productImages=images;

        // product = await product.save();

        return res.status(200).json({
            message:"product created succesfully",
            success:true,
            product
        })
    } catch (error) {
        console.log(error);
    }
}