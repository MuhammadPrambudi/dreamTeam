const Sequelize = require('sequelize');
const sequelize = require('../configs/sequelize');
class User extends Sequelize.Model{}

User.init({
	nama: Sequelize.STRING,
	username: Sequelize.STRING,
	email: Sequelize.STRING,
	password: Sequelize.STRING,
	roles: Sequelize.STRING
}, { sequelize, modelName: 'user'});

module.exports = User;