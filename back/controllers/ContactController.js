const Contact = require('../models/Contact')

exports.createContact = async (req, res) => {
    try{

        const { name, email, message } = req.body

        if(!name || !email || !message) return res.status(400).json({message: 'all fields required'})

        const contact = Contact.create({
            name,
            email,
            message
        })
        await contact.save()

        res.status(201).json({message: 'Message sent successfully'})

    }catch(err){
        res.status(500).json({message: 'Server error', error: err.message})
    }
}

exports.getContacts = async (req, res) => {
    try{

        const contact = await Contact.get().sort({ createdAt: -1 })
        res.status(200).json({message: 'messages received sucessfully', contact})

    }catch(err){
        res.status(500).json({message: 'Server error', error: err.message})
    }
}