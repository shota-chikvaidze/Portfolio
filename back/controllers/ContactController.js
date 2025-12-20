const Contact = require('../models/Contact')

exports.createContact = async (req, res) => {
    try{

        const { name, email, message } = req.body ?? {}

        // VALIDATION: Check each field individually for specific error messages
        
        // Check if all fields exist
        if(!name || !email || !message) {
            return res.status(400).json({message: 'All fields are required'})
        }

        // Validate name length
        if(name.trim().length < 2) {
            return res.status(400).json({message: 'Name must be at least 2 characters'})
        }

        // Validate email format (basic check)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(!emailRegex.test(email)) {
            return res.status(400).json({message: 'Invalid email format'})
        }

        // Validate message length
        if(message.trim().length < 10) {
            return res.status(400).json({message: 'Message must be at least 10 characters'})
        }

        if(message.trim().length > 500) {
            return res.status(400).json({message: 'Message cannot exceed 500 characters'})
        }

        const contact = await Contact.create({
            name: name.trim(),
            email: email.trim().toLowerCase(),
            message: message.trim()
        })

        res.status(201).json({message: 'Message sent successfully', contact})

    }catch(err){
        res.status(500).json({message: 'Server error', error: err.message})
    }
}

exports.getContacts = async (req, res) => {
    try{

        const contact = await Contact.find().sort({ createdAt: -1 })
        res.status(200).json({message: 'messages received sucessfully', contact})

    }catch(err){
        res.status(500).json({message: 'Server error', error: err.message})
    }
}

exports.deleteContacts = async (req, res) => {
    try{

        const contact = await Contact.findByIdAndDelete(req.params.id)
        res.status(200).json({message: 'contact deleterd sucessfully', contact})

    }catch(err){
        res.status(500).json({message: 'Server error', error: err.message})
    }
}