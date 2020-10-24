const express = require('express')
const router = express.Router();
const user = require('./user')
const product = require('./product')
const cart = require('./cart')
const bag = require('./bag')
const shoes = require('./shoes')
const acc = require('./acc')


router.use('/user', user)
router.use('/product', product)
router.use('/cart', cart)
router.use('/bag', bag)
router.use('/shoes', shoes)
router.use('/acc', acc)

module.exports = router