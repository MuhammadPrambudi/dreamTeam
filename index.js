const express = require ('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
//app.use(bodyParser.json());

const homeRouter = require('./routes/home');
app.use(homeRouter);
app.get('/',(req,res)=>{
	res.render('index');
})
//Port menggunakan 3105 kelompok5 3if-01
app.listen(3105, () => {
    console.log('Server Started on port 3105');
  //  sequelize.sync();
})