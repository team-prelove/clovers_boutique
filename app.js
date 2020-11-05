const express = require('express')
const morgan = require('morgan')
const routing = require('./routing/index')
const app = express()
const port = 8080
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




app.listen(port, () => {
  console.log(`telah tersambung pada port : ${port}`)
})
