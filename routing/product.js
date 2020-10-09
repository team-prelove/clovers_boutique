const express = require('express')
const router = express.Router();
const productController = require('../controller/product');


router.get('/list', productController.list)
router.post('/insert/product', productController.tambahProduct)
router.post('/insert/jenis', productController.tambahJenis)


module.exports = router