const { DataTypes } = require('sequelize');
const sq = require('../config/connection');
const ModelProduct = require('./modelProduct');
const ModelUser = require('./modelUser');

const ModelCart = sq.define('Cart', {
  
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  productId: {
    type: DataTypes.INTEGER,
    length:30,
    allowNull:false
  },
  userId: {
    type: DataTypes.INTEGER,
    length:30,
    allowNull:false
  },
  jumlah_barang: {
    type: DataTypes.INTEGER,
    length:30,
    allowNull:false
  },
  
}, {
 
});

    ModelCart.belongsTo(ModelProduct);
    ModelProduct.hasMany(ModelCart);
    ModelCart.belongsTo(ModelUser);
    ModelUser.hasMany(ModelCart);
ModelCart.sync({alter:true})

module.exports = ModelCart;