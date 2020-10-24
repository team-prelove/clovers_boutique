const express = require('express')
const router = express.Router();
const authentication = require('../middlewares/authentication')
const bagController = require('../controller/bag')


router.get('/', authentication, bagController.bagPage)
router.get('/baglist', authentication, bagController.bagList)


module.exports = router