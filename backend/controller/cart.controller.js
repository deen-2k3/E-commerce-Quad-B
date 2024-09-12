const Product = require("../models/product.model");
const User = require("../models/user.model");
const mongoose = require("mongoose");

exports.addToCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    // Check if userId or productId is missing
    if (!userId || !productId) {
      return res.status(401).json({
        success: false,
        message: "Fields are missing."
      });
    }

    // Validate productId and userId as ObjectId strings
    if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid user or product ID."
      });
    }

    // Convert productId to ObjectId
    const productObjectId = mongoose.Types.ObjectId(productId);

    // Find the user and product in the database
    const user = await User.findById(userId);
    const product = await Product.findById(productObjectId);

    // If the user or product is not found
    if (!user || !product) {
      return res.status(404).json({
        success: false,
        message: "User or Product not found."
      });
    }

    // Check if the product is already in the user's cart
    const productInCart = user.cart.find(item => item.product.toString() === productObjectId.toString());

    if (productInCart) {
      // If product is already in cart, increase the quantity
      productInCart.quantity += 1;
    } else {
      // Otherwise, add the product to the cart
      user.cart.push({
        product: productObjectId, // Ensure productId is an ObjectId
        quantity: 1
      });
    }

    // Save the updated user document with the new cart
    await user.save();

    res.status(200).json({
      success: true,
      message: "Product added to cart successfully.",
      cart: user.cart
    });

  } catch (error) {
    // Handle any errors that occur
    res.status(500).json({
      success: false,
      message: "An error occurred while adding the product to the cart.",
      error: error.message
    });
  }
};
