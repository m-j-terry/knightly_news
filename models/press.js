const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pressSchema = new Schema({
    previousEditions: Array
})

module.exports = mongoose.model('Press', pressSchema)