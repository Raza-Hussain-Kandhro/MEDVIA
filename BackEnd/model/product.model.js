const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  user_name: {
    type: String
  },
  user_image: {
    type: String
  },
  comment: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const productSchema = new mongoose.Schema(
  {
    product_images: {
      type: [String],
      required: true
    },

    title: {
      type: String,
      required: true
    },

    price: {
      type: Number,
      required: true
    },

    old_price: {
      type: Number,
      required: true
    },

    description_heading: {
      type: String
    },

    description: {
      type: String
    },

    category: {
      type: String,
      required: true
    },

    feature_product: {
      type: String,
      default: false
    },
    weight: {
      type: Number,
    },
    reviews: [reviewSchema]
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
