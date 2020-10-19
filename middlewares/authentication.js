const ModelUser = require('../model/modelUser')
const {verifyToken} = require('../helper/jwt');

const authentication = (req, res , next) => {
    const decode = verifyToken(req.headers.accesstoken)
    ModelUser.findByPk(decode.id)
      .then( data => {
        if(data){
          req.user = decode
          next()
        } else {
          next({
            status: 400,
            message: `Your Account is Not Registered`
          })
        }
      })
      .catch(next)
  }
  
  
  module.exports = authentication