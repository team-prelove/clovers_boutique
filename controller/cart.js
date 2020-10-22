const ModelCart = require('../model/modelCart')
const { verifyToken } = require('../helper/jwt')
const ModelProduct = require('../model/modelProduct')


class Cart {
    static async cartList(req, res, next){
        const data_user  = verifyToken(req.session.accesstoken)
        const userId = data_user.id
    let data = await ModelCart.findAll({ 
        where:{userId},
        include : ModelProduct
        })
        .then(result =>{
            // res.json(result)
            res.render('cart', {result, data})
        })
        .catch(err =>{
         next(err)
        })
    }
    static addCart(req,res,next){
        const productId  = req.params.id
        const data_user  = verifyToken(req.session.accesstoken)
        const userId = data_user.id
        Cart.create({productId, userId})
        .then(result =>{
            res.redirect('/cart')
        })
        .catch(err =>{
            next(err)
        })
    }
    static removeCart(req, res, next){
        const {id} = req.params
        Cart.destroy({where:{id}})
        .then(result => {
            res.redirect('/cart')
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = Cart