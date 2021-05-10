const mongoose = require('mongoose');

const { Schema } = mongoose;

const PostSchema = new Schema(
  {
    author: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
    title: { type: String, required: true },
    text: { type: String, required: true },
    images: [String],
    timestamp: { type: Date, required: true },
    published: { type: Boolean, required: true },
    category: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
    ingredient: [{ type: Schema.Types.ObjectId, ref: 'Ingredient' }],
  },
);

PostSchema.virtual('url').get(function () {
  return `/posts/${this._id}`;
});

module.exports = mongoose.model('Post', PostSchema);
