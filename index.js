const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());

const homeRouter = require('./routes/home');
const registerRouter = require('./routes/user');


const sequelize = require('./configs/sequelize');
const User = require('./models/user');

app.use(homeRouter);
app.use('/user', registerRouter);

//Port menggunakan 3105 kelompok5 3if-01
app.listen(3105, () => {
    console.log('Server Started on port 3105');
  	sequelize.sync();
})