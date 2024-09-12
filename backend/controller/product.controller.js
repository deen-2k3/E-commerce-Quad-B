const Product = require("../models/product.model");
const { uploadImageToCloudinary } = require("../utils/imageUploader"); // Assuming you have a function for image upload
const cloudinary = require("cloudinary").v2; // Ensure Cloudinary is configured

exports.createProduct = async (req, res) => {
  try {
    const {
      productTitle,
      productDescription,
      originalPrice,
      discountPrice,
      measurements,
      availability,
      category,
    } = req.body;

    console.log(productTitle);

    if (
      !productTitle ||
      !productDescription ||
      !originalPrice ||
      !discountPrice ||
      !measurements ||
      !availability ||
      !category
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    if (!req.files || !req.files) {
      return res.status(400).json({
        success: false,
        message: "No image file uploaded.",
      });
    }
    let arr = [];
    const img1 = await uploadImageToCloudinary(
      req.files.image,
      process.env.FOLDER_NAME
    );
    if (req.files.image1) {
      const img2 = await uploadImageToCloudinary(
        req.files.image1,
        process.env.FOLDER_NAME
      );
      arr.push(img2.secure_url);
    }
    if (req.files.image2) {
      const img3 = await uploadImageToCloudinary(
        req.files.image2,
        process.env.FOLDER_NAME
      );
      arr.push(img3.secure_url);
    }

    if (req.files.image3) {
      const img4 = await uploadImageToCloudinary(
        req.files.image3,
        process.env.FOLDER_NAME
      );
      arr.push(img4.secure_url);
    }

    if (req.files.image4) {
      const img5 = await uploadImageToCloudinary(
        req.files.image4,
        process.env.FOLDER_NAME
      );
      arr.push(img5.secure_url);
    }

    arr.push(img1.secure_url);

    // Create product
    const product = await Product.create({
      productTitle,
      productDescription,
      originalPrice,
      discountPrice,
      measurements,
      availability,
      category,
      productImages: arr,
    });

    return res.status(201).json({
      message: "Product created successfully",
      success: true,
      product,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
