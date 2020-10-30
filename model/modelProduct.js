const { DataTypes } = require('sequelize');
const sq = require('../config/connection');


const ModelProduct = sq.define('Product', {
  
    id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
    nama_barang: {
    type: DataTypes.STRING,
    length:30,
    allowNull:false
  },
   jenis_barang: {
    type: DataTypes.STRING,
    length:30,
    allowNull:false
  },
    harga: {
    type: DataTypes.INTEGER,
    length:30,
    allowNull:false
  },
    stock: {
    type: DataTypes.INTEGER,
    length:30,
    allowNull:false
  },
    keterangan: {
    type: DataTypes.STRING,
    allowNull:false
  },
    foto1: {
        type: DataTypes.STRING,
        allowNull:false
    },
    foto2: {
        type: DataTypes.STRING,
        allowNull:false
    },
    foto3: {
        type: DataTypes.STRING,
        allowNull:false
    },
}, {
 
});

    

    ModelProduct.sync({alter:true})

module.exports = ModelProduct;