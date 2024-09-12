const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product', // Reference to the Product model
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    default: 1
  }
});

module.exports=mongoose.model("Cart",CartSchema)