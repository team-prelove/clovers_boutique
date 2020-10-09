const ModelMaster = require('../model/modelMaster')


class Jenis {
    static tambahJenis(req, res){
        ModelMaster.create(req.body).then(response => {
            res.json({pesan: 'berhasil'})
        }).catch(err => {
            console.log(err)
        })
    }
}

module.exports = Jenis