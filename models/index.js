const mongoose = require('mongoose')
const productSchema = require('./Products')

const Product = mongoose.model('Product', productSchema)

module.exports = {Product}