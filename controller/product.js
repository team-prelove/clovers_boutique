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
        const { nama_barang, jenis_barang, harga, stock, keterangan } = req.body
        console.log(req.body)
        ModelProduct.create({nama_barang, jenis_barang, harga, stock, keterangan})
        .then(response => {
            res.status(200).json({pesan: 'berhasil'})
        }).catch(err => {
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
            res.status(200).json({result})
        })
        .catch(err =>{
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
            res.status(200).json({result})
        })
        .catch(err =>{
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
            res.status(200).json({result})
        })
        .catch(err =>{
            next(err)
        })
    }
    static detailList(req, res, next){
        const { id } = req.params
        ModelProduct.findAll(id)
        .then(result => {
            res.status(200).json({result})
        })
        .catch(err =>{
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