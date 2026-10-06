import { Schema, model } from 'mongoose'

const OrderSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  address: String,
  apartment: String,
  city: String,
  country: String,
  postalCode: String,
  province: String,
  saveInfo: Boolean,
  cartItems: [
    {
      _id: String,
      title: String,
      price: Number,
      quantity: Number,
      product_images: [String],
    },
  ],
  totalPrice: Number,
  createdAt: { type: Date, default: Date.now },
})

const Order = model('Order', OrderSchema)
export default Order
