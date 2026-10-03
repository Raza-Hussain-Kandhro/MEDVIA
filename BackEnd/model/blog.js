const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    blog_img: {
      type: String
    },

    date: {
      type: Date,
      default: Date.now
    },

    tag: {
      type: String,
    },

    blog_title: {
      type: String,
      required: true
    },

    description: {
      type: String
    },

    second_description: {
      type: String
    }
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
