const { Schema } = require('mongoose')

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    category: { type: String, required: true },
    imageURL:  { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = productSchema