const express = require('express')
const router = express.Router();
const productController = require('../controller/product');
const authentication = require('../middlewares/authentication')
const upload = require('../middlewares/uploadFile')


router.get('/list', productController.list)
router.get('/baglist', authentication, productController.bagList)
router.get('/shoeslist', authentication, productController.shoesList)
router.get('/acclist', authentication, productController.accList)
router.get('/detail/:id', authentication, productController.detailList)

var cpUpload = upload.fields([{ name: 'foto1', maxCount: 1 }, { name: 'foto2', maxCount: 1 }, { name: 'foto3', maxCount: 1 }])
router.post('/insert', cpUpload, productController.tambahProduct)
router.post('/edit/:id', cpUpload, productController.editProduct)

module.exports = router