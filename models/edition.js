const mongoose = require('mongoose')
const Schema = mongoose.Schema

const editionSchema = new Schema({
    season: { type: String, required: true }, 
    year: { type: Number, required: true }, 
    file: String
})

module.exports = mongoose.model('Edition', editionSchema)