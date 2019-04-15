const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  supplier: { type: String, required: 'Please give a supplier name' },
  product: { type: String, required: 'Please give a product name' },
  price: { type: Number, required: 'Please give a product price' }
})

module.exports = mongoose.model('Product', productSchema)
