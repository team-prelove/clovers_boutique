const express = require('express')
const router = express.Router();
const user = require('./user')
const product = require('./product')
const jenis = require('./jenis')


router.use('/user', user)
router.use('/product', product)
router.use('/jenis', jenis)


module.exports = router