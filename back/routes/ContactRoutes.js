const express = require('express')
const contactController = require('../controllers/ContactController')
const adminProtect = require('../middleware/adminMiddleware')
const router = express.Router()

router.post('/post-contact', contactController.createContact)
router.get('/get-contact', adminProtect, contactController.getContacts)
router.delete('/delete-contact/:id', adminProtect, contactController.deleteContacts)

module.exports = router