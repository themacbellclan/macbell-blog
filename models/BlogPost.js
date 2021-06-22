const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title required"],
    trim: true,
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("BlogPost", BlogPostSchema);
