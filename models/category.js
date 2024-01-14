const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    category: String,
    sortOrder: Number
})

// module.exports = mongoose.model('Category', categorySchema)

const Category = mongoose.model('Category', categorySchema)
module.exports = Category