const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('clovers', 'fosan', 'academy', {
    host: '34.101.183.89',
    port: 5432,
    dialect: 'postgres',
    logging: false,
  });

  module.exports =  sequelize;