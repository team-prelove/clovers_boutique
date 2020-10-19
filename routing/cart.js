const express = require('express')
const router = express.Router();
const authentication = require('../middlewares/authentication')
const cartController = require('../controller/cart')


router.get('/', authentication, cartController.cartList)
router.get('/addCart/:id', authentication, cartController.addCart)
router.get('/delete_cart/:id', authentication, cartController.removeCart)

module.exports = router