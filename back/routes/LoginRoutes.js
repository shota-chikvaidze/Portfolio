const express = require('express')
const loginAuth = require('../controllers/userController')
const adminMiddleware = require('../middleware/adminMiddleware')
const router = express.Router()

router.post('/login', loginAuth.adminLogin)
router.get('/me', adminMiddleware, loginAuth.me)

module.exports = router