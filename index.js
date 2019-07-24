const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());

const homeRouter = require('./routes/home');
const registerRouter = require('./routes/user');
const bookRouter = require('./routes/book');
const orderRouter = require('./routes/order')

const sequelize = require('./configs/sequelize');

const Book = require('./models/book');
const User = require('./models/user');
const Order = require('./models/order');

app.use(homeRouter);
app.use('/user', registerRouter);
app.use('/books', bookRouter);
app.use('/orders', orderRouter);

//Port menggunakan 3105 kelompok5 3if-01
app.listen(3105, () => {
    console.log('Server Started on port 3105');
  	sequelize.sync();
})