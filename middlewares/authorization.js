const { verifyToken } = require('../helper/jwt')
const  User  = require('../model/modelUser')
const product = require('../model/modelProduct')


const authorization = (req, res, next) => {
  const decode = verifyToken(req.headers.accestoken);
  product.findOne({
      where:{
          UserId : decode.id
      }
  })
    .then( data => {
        // console.log(data)
        if (data.UserId === req.user.id) {
          next()
      } else {
          next({status:400, message:"Maaf ini bukan id anda"});
      }
    })
    .catch(err => {
      next(err)
    })
}

module.exports = authorization 
