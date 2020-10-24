const ModelProduct = require('../model/modelProduct')
const { verifyToken } = require('../helper/jwt')
const ModelProduct = require('../model/modelProduct')

class Acc{
    static accPage(req, res, next){
        ModelProduct.findAll()
        .then(result => {
            let data_user = verifyToken(req.session.accesstoken)
            res.render('/acc', {result, data_user})
        })
        .catch(err => {
            next(err)
        })
    }
    static accList(req, res, next){
        ModelProduct.findAll({
            where : {
                jenis_barang : 'Aksesoris'
            }
        })
        .then(result => {
            let data_user = verifyToken(req.session.accesstoken)
            res.render('/acc', {result, data_user})
        })
        .catch(err =>{
            next(err)
        })
    }
}

module.exports = Acc