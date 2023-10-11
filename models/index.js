const mongoose = require('mongoose')
const productSchema = require('./Product')

const Product = mongoose.model('Product', productSchema)

module.exports = {Product}