const ModelCart = require('../model/modelCart')
const { verifyToken } = require('../helper/jwt')
const ModelProduct = require('../model/modelProduct')
const { update } = require('../model/modelProduct')


class Cart {
    static cartList(req, res, next){
        const UserId = req.user.id
        ModelCart.findAll({ 
        where:{UserId},
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
        ModelProduct.findOne({id:ProductId})
            .then(data =>{
                // console.log(data)
                if(data.stock <= 0){
                    next({ status: 400, message: 'Maaf stok habis'})
                }
                
                else if(jumlah_barang > data.stock) {
                    next({ status: 400, message: 'Maaf stok kurang'})
                }
                else {
                    // console.log(ProductId)
                    return ModelCart.findOne({where : { ProductId: ProductId, UserId} })
                }
            })
            .then( data => {
                console.log(data, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
 
                if(data){
                   ModelCart.findOne({ ProductId: ProductId}, { jumlah_barang })
                  .then(data => {
                        if(data) {
                           return ModelCart.update({ jumlah_barang }, {where : {ProductId}})
                            
                        }
                  })
                  .catch(next)
                } else {
                    console.log("crot")
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
        ModelCart.destroy({where:{id}})
        .then(result => {
            res.status(200).json({result : "sukses"})
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = Cart