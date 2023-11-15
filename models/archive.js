const mongoose = require('mongoose')
const Schema = mongoose.Schema

const archiveSchema = new Schema({
    title: { type: String, required: true },
    imgUrl: { type: String, required: true },
    pdfUrl: { type: String, required: true }
}, {
    timestamps: true
})

module.exports = mongoose.model('Archive', archiveSchema)