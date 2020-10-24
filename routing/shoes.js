const express = require('express')
const router = express.Router();
const authentication = require('../middlewares/authentication')
const shoesController = require('../controller/shoes')


router.get('/', authentication, shoesController.shoesPage)
router.get('/shoeslist', authentication, shoesController.shoesList)


module.exports = router