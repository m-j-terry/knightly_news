const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
    title: { type: String, required: true },
    contributor: { type: Schema.Types.ObjectId, ref: 'Contributor' },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    imageUrl: String,
    publicId: String,
    imageSource: String,
    text: { type: String, required: true }
})

module.exports = mongoose.model('Article', articleSchema)