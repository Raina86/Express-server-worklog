const sequelize = require ('sequelize')

module.exports= new Sequelize('dvdrental','postgres','Kadidia1#', {
  host:'localhost',
  dialect:'postgres',
  operatorsAliases:'false',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
    }
    
    });