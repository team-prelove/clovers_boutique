const ModelProduct = require('../model/modelProduct')
const ModelMaster = require('../model/modelMaster')


class Product {
    static async list(req, res){

       let data = await ModelProduct.findAll({ 
        include : ModelMaster
        })
        // console.log(data)
        res.render('/list', {data})
    }
    static tambahProduct(req, res){
        ModelProduct.create(req.body).then(response => {
            res.json({pesan: 'berhasil'})
        }).catch(err => {
            console.log(err)
        })
    }
}

module.exports = Product