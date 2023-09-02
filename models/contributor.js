const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contributorSchema = new Schema({
    name: {
        type: String, 
        set: function(value){
            let split = value.split(' ')
            if (split.length === 1) return value.charAt(0).toUpperCase() + value.slice(1)

            split.forEach((string, index, array) => { array[index] = string.charAt(0).toUpperCase() + string.slice(1)})
            let toString = split.toString().replaceAll(',', ' ')
            return toString
        },
        required: true
    },
    articles: [{ type: Schema.Types.ObjectId, ref: 'Article'}]
})

module.exports = mongoose.model('Contributor', contributorSchema)