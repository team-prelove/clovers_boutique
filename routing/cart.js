const express = require('express')
const router = express.Router();
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')
const cartController = require('../controller/cart')


router.get('/', authentication, cartController.cartList)
router.post('/addcart/:id', authentication, cartController.addCart)
router.post('/editcart/:id', authentication, cartController.editCart)
router.delete('/delete_cart/:id', authentication, cartController.removeCart)

module.exports = router