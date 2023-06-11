// productModel.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true, enum: ['skincare', 'makeup', 'fragrance'] },
  brand: { type: String, required: true },
});

module.exports = mongoose.model('Product', productSchema);
