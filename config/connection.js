const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('clovers', 'fosan', 'academy', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    logging: false,
  });

  module.exports =  sequelize;