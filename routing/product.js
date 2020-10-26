const express = require('express')
const router = express.Router();
const productController = require('../controller/product');
const authentication = require('../middlewares/authentication')


router.get('/list', productController.list)
router.post('/insert/product', productController.tambahProduct)
router.get('/baglist', authentication, productController.bagList)
router.get('/shoeslist', authentication, productController.shoesList)
router.get('/acclist', authentication, productController.accList)
router.get('/detail/:id', authentication, productController.detailList)


module.exports = router