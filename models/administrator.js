const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Schema = mongoose.Schema

const SALT_ROUNDS = 6

const administratorSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, trim: true }
}, {
    toJSON: {
        transform: function(doc, ret) {
            delete ret.password;
            return ret;
        }
    }
})

administratorSchema.pre('save', async function(next) {
    // 'this' is the admin document
    if (!this.isModified('password')) return next();
    // update password with computed hash
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next();
})

administratorSchema.methods.generateAuthToken = async function() {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET)
    return token
}

const Administrator = mongoose.model('Administrator', administratorSchema)

module.exports = Administrator