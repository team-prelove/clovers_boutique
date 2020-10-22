const ModelProduct = require('../model/modelProduct')
const ModelMaster = require('../model/modelCart')
const {Op} = require('sequelize')


class Product {
    static async list(req, res){

       let data = await ModelProduct.findAll({ 
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
    // static search(req, res, next){
    //     const {keyword} = req.query
    //     let data = await ModelProduct.findAll({ 
    //         where : {
    //             nama_barang : {
    //                 [Op.like] : '%' + keyword + '%'
    //             }
    //         }
    //         })
    // }
}

module.exports = Product