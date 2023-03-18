const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Product = sequelize.define('Product',{
    id:{
        type: Sequelize.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey : true
    },
    amount:Sequelize.INTEGER,
    name: Sequelize.STRING
});

module.exports = Product;