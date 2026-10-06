export interface Review {
  user_name?: string
  user_image?: string
  comment?: string
  date?: string
}
export interface Product {
  _id: string
  title: string
  price: number
  old_price?: number
  product_images: string[]
  category?: string
  description_heading?: string
  description?: string
  feature_product?: string
  reviews?: Review[]
  averageRating?: number
}
export interface CartItem extends Product {
  quantity: number
}
export interface CartState {
  cartItems: CartItem[]
  totalQuantity: number
  totalPrice: number
}
export interface Blog {
  _id?: string
  blog_title: string
  blog_img?: string
  img_alt?: string
  description?: string
  second_description?: string
  content?: string
  tag?: string
  date?: string
}
