let Sequelize = require('sequelize');

let sequelize = new Sequelize('projects','root','Asparagus',{dialect:'mysql',host:'localhost'});

module.exports = sequelize;


