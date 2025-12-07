const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { enum: ['user', 'admin'], default: 'user' }
})

module.exports = mongoose.model('User', userSchema)