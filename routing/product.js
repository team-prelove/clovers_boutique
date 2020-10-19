const express = require('express')
const router = express.Router();
const productController = require('../controller/product');
const authentication = require('../middlewares/authentication')


router.get('/list', authentication, productController.list)
router.post('/insert/product', authentication, productController.tambahProduct)



module.exports = router