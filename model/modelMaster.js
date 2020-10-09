const { DataTypes } = require('sequelize');
const sq = require('../config/connection')

const ModelMaster = sq.define('Master', {
  
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  jenis_barang: {
    type: DataTypes.STRING,
    length:30,
    allowNull:false
  },
  
}, {
 
});

ModelMaster.sync({alter:true})

module.exports = ModelMaster;