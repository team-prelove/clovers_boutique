const express = require('express')
const morgan = require('morgan')
const routing = require('./routing/index')
const app = express()
const port = 3001
const upload = require('./middlewares/uploadFile')
const errorHandler = require('./middlewares/errorHandler')
// const cors = require('cors')


// app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('uploads'))
app.use('/', routing)
app.use(errorHandler)

var cpUpload = upload.fields([{ name: 'foto1', maxCount: 1 }, { name: 'foto2', maxCount: 1 }, { name: 'foto3', maxCount: 1 }])
app.post('/upload', cpUpload, function (req, res, next) {
  var file1 = req.files.foto1[0].filename;
  var file2 = req.files.foto2[0].filename;
  var file3 = req.files.foto3[0].filename;
  res.sendStatus(200)
})


app.listen(port, () => {
  console.log(`telah tersambung pada port : ${port}`)
})