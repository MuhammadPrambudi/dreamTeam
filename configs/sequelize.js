const Sequelize = require('sequelize');
//const sequelize = new Sequelize('mysql://root:@localhost:3105/kel5-3if1');

const sequelize = new Sequelize('kel5_3if1', 'root', '', {
	host: 'localhost',
	dialect: 'mysql'
});

module.exports = sequelize;