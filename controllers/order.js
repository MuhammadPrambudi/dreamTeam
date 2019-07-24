const Order = require('../models/order');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();


//Order, dimana hanya roles = user yang bisa mengakses
module.exports.createOrder = (req, res) => {
    jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
        if(authData['roles'] == "user") {
            let values ={
                judul : req.body.judul,
                harga : req.body.harga,
                jumlah : req.body.jumlah
            }
            Order
            .create(values)
            .then((order) => {
                res.json(order);
            })
            .catch((error) => {
                console.log("Gagal mengorder");
            })
        } else {
            res.sendStatus(403);
        }
    })
    
}