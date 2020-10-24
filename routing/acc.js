const express = require('express')
const router = express.Router();
const authentication = require('../middlewares/authentication')
const accController = require('../controller/acc')


router.get('/', authentication, accController.accPage)
router.get('/acclist', authentication, accController.accList)


module.exports = router