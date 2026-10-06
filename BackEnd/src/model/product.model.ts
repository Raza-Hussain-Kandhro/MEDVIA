import { Schema, model } from 'mongoose'

const reviewSchema = new Schema({
  user_name: { type: String },
  user_image: { type: String },
  comment: { type: String },
  date: { type: Date, default: Date.now },
})

const productSchema = new Schema(
  {
    product_images: { type: [String], required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    old_price: { type: Number, required: true },
    description_heading: { type: String },
    description: { type: String },
    category: { type: String, required: true },
    // Stored as the strings 'true' or 'false', which is what the frontend compares against.
    feature_product: { type: String, default: 'false' },
    weight: { type: Number },
    reviews: [reviewSchema],
  },
  { timestamps: true },
)

const Product = model('Product', productSchema)
export default Product
