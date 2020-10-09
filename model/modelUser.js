const { DataTypes } = require('sequelize');
const sq = require('../config/connection')

const ModelUser = sq.define('User', {
  
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    length:30,
    allowNull:false
  },
  password: {
    type: DataTypes.STRING,
    allowNull:false
  },
  email: {
    type: DataTypes.STRING,
    length:30,
    allowNull:false
  },
  no_telp: {
    type: DataTypes.STRING,
    length:30,
    allowNull:false
  },
}, {
 
});

ModelUser.sync({alter:true})

module.exports = ModelUser;