const Sequelize = require('sequelize');
const sequelize = require('../configs/sequelize');

class Order extends Sequelize.Model {}

//Inisialisasi model Book
Order.init({
  judul: Sequelize.STRING,
  harga : Sequelize.INTEGER,
  jumlah: Sequelize.INTEGER
}, { sequelize, modelName: 'order' });

module.exports = Order;