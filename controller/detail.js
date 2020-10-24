const ModelProduct = require('../model/modelProduct')
const { verifyToken } = require('../helper/jwt')

class Detail{
    static detailList(req, res, next){
        const data_user  = verifyToken(req.session.accesstoken)
        const { id } = req.params
        ModelProduct.findAll(id)
        .then(result => {
            res.render('/detail', {result, data_user})
        })
        .catch(err =>{
            next(err)
        })
    }
}

module.exports = Detail