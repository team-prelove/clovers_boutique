const express = require('express')
const router = express.Router();
const authentication = require('../middlewares/authentication')
const detailController = require('../controller/detail')


router.get('/:id', authentication, detailController.detailList)



module.exports = router