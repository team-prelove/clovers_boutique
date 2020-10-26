const express = require('express')
const router = express.Router();
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')
const cartController = require('../controller/cart')


router.get('/', authentication, cartController.cartList)
router.post('/addcart/:id', authentication, cartController.addCart)
router.get('/delete_cart/:id', authentication, authorization, cartController.removeCart)

module.exports = router