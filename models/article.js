const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
    title: { type: String, required: true },
    contributor: String,
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    imageUrl: String,
    text: { type: String, required: true }
})

module.exports = mongoose.model('Article', articleSchema)