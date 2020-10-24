const ModelProduct = require('../model/modelProduct')
const { verifyToken } = require('../helper/jwt')

class Bag{
    static bagPage(req, res, next){
        ModelProduct.findAll()
        .then(result => {
            let data_user = verifyToken(req.session.accesstoken)
            res.render('/bag', {result, data_user})
        })
        .catch(err => {
            next(err)
        })
    }
    static bagList(req, res, next){
        ModelProduct.findAll({
            where : {
                jenis_barang : 'tas'
            }
        })
        .then(result => {
            let data_user = verifyToken(req.session.accesstoken)
            res.render('/bag', {result, data_user})
        })
        .catch(err =>{
            next(err)
        })
    }
}

module.exports = Bag