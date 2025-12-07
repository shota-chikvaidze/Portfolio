const express = require('express')
const loginAuth = require('../controllers/userController')
const router = express.Router()

router.post('/', loginAuth.adminLogin)

module.exports = router