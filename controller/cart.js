const ModelCart = require('../model/modelCart')
const { verifyToken } = require('../helper/jwt')
const ModelProduct = require('../model/modelProduct')
const { update } = require('../model/modelProduct')


class Cart {
    static cartList(req, res, next){
        const userId = req.user.id
        ModelCart.findAll({ 
        where:{userId},
        include : ModelProduct
        })
        .then(result =>{
            // res.json(result)
            res.status(200).json({result})
        })
        .catch(err =>{
         next(err)
        })
    }
    static addCart(req,res,next){
        const ProductId  = req.params.id
        const { jumlah_barang } = req.body
        const UserId = req.user.id
        if(jumlah_barang < 1){
            next({ status: 400, message: 'Amount Dont Lower Than 1'})
        }
        ModelProduct.findOne({id:ProductId})
            .then(data =>{
                // console.log(data)
                if(data.stock <= 0){
                    next({ status: 400, message: 'Stock is Empty'})
                }
                
                else if(jumlah_barang > data.stock) {
                    next({ status: 400, message: 'Your Amount Greather Than Product Stock'})
                }
                else {
                    console.log('tes')
                    return ModelCart.findOne({ProductId: ProductId, UserId})
                }
            })
            .then( data => {
                console.log('tus')
                console.log(data)
                if(data){
                   ModelCart.findOne({ ProductId: ProductId}, { jumlah_barang })
                  .then(data => {
                        if(data) {
                           return ModelCart.update({ jumlah_barang }, {where : {ProductId}})
                            
                        }
                  })
                  .catch(next)
                } else {
                    console.log(ProductId)
                  return ModelCart.create({ ProductId: ProductId, jumlah_barang, UserId })
                }
            })
            .then( result => {
                res.status(200).json(result)
            })
            .catch(next)
    }
    
    static removeCart(req, res, next){
        const {id} = req.params
        Cart.destroy({where:{id}})
        .then(result => {
            res.status(200).json({result})
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = Cart