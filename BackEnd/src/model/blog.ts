import { Schema, model } from 'mongoose'

const blogSchema = new Schema(
  {
    blog_img: { type: String },
    date: { type: Date, default: Date.now },
    tag: { type: String },
    blog_title: { type: String, required: true },
    description: { type: String },
    second_description: { type: String },
  },
  { timestamps: true },
)

const Blog = model('Blog', blogSchema)
export default Blog
