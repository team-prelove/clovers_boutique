const express = require('express')
const router = express.Router();
const jenisController = require('../controller/jenis');


router.post('/insert/jenis', jenisController.tambahJenis)

module.exports = router