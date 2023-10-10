const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
    title: { type: String, required: true },
    contributor: String,
    contributor2: String,
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    featured: { type: Boolean, required: true },
    imageUrl: String,
    text: { type: String, required: true }
}, {
    timestamps: true
})

module.exports = mongoose.model('Article', articleSchema)