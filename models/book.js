const Sequelize = require('sequelize');
const sequelize = require('../configs/sequelize');

class Book extends Sequelize.Model {}

//Inisialisasi model Book
Book.init({
  kode: Sequelize.STRING,
  kategori: Sequelize.STRING,
  judul: Sequelize.STRING,
  pengarang: Sequelize.STRING,
  penerbit: Sequelize.STRING,
  tahun_terbit: Sequelize.STRING,
  deskripsi: Sequelize.STRING,
  stok: Sequelize.INTEGER,
  harga : Sequelize.INTEGER,
  berat: Sequelize.STRING
}, { sequelize, modelName: 'book' });

module.exports = Book;