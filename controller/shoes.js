const ModelProduct = require('../model/modelProduct')
const { verifyToken } = require('../helper/jwt')

class Shoes{
    static shoesPage(req, res, next){
        ModelProduct.findAll()
        .then(result => {
            let data_user = verifyToken(req.session.accesstoken)
            res.render('/shoes', {result, data_user})
        })
        .catch(err => {
            next(err)
        })
    }
    static shoesList(req, res, next){
        ModelProduct.findAll({
            where : {
                jenis_barang : 'Sepatu'
            }
        })
        .then(result => {
            let data_user = verifyToken(req.session.accesstoken)
            res.render('/shoes', {result, data_user})
        })
        .catch(err =>{
            next(err)
        })
    }
}

module.exports = Shoes