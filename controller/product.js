const ModelProduct = require('../model/modelProduct')
const ModelMaster = require('../model/modelCart')


class Product {
    static async list(req, res){

       let data = await ModelProduct.findAll({ 
        include : ModelMaster
        })
        // console.log(data)
        res.render('/list', {data})
    }
    static tambahProduct(req, res, next){
        ModelProduct.create(req.body).then(response => {
            res.status(200).json({pesan: 'berhasil'})
        }).catch(err => {
            next(err)
        })
    }
}

module.exports = Product