const express = require('express')
const router = express.Router();
const userController = require('../controller/user')


router.get('/register', userController.formTambah)
router.post('/register', userController.tambahUser)

router.get('/login', userController.formLogin)
router.post('/login', userController.login)
router.get('/logout', userController.logout)

module.exports = router