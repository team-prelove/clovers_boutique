const express = require('express')
const router = express.Router();
const userController = require('../controller/user')



router.post('/register', userController.tambahUser)

router.post('/login', userController.login)
router.get('/logout', userController.logout)

module.exports = router