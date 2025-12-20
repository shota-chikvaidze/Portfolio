const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true, min: 10, max: 500 },
    createdAt: { type: Date, default: Date.now() }
})

module.exports = mongoose.model('Contact', contactSchema)