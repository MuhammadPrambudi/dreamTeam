const Book = require('../models/book');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

module.exports.getIndexBook = (req, res) => {
    jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
        if(error) {
            res.sendStatus(403);
        } else {
            res.json({
                message: 'OK',
                authData: authData
            })
        }
    })
}

//Lihat semua data buku, dimana hanya roles = user yang bisa mengakses
module.exports.getAllBook = (req, res) => {
    jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
        if(authData['roles']  == "user") {
            Book
                .findAll({
                    // attributes : ['id', 'kode', 'kategori', 'judul', 'pengarang', 'penerbit', 'tahun_terbit', 'deskripsi', 'stok', 'harga', 'berat']
                })
                .then((book) => {
                    res.json(book);
                })
                .catch((error) => {
                    console.log("Data gagal di load");
                })
        } else {
            res.sendStatus(403);
        }
    })

}

//Lihat buku berdasarkan id, dimana hanya roles = user yang bisa mengakses
module.exports.detailBook = (req, res) => {
    jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
        if(authData['roles']  == "user") {
            Book
                .findOne({
                    where : {
                        id : req.params.id
                    }
                })
                .then((book) => {
                    res.json(book);
                })
                .catch((error) => {
                    console.log("Data gagal di load");
                })
        } else {
            res.sendStatus(403);
            console.log("Akses ditolak")
        }
    })

}

//Buat buku, dimana hanya roles = admin yang bisa mengakses
module.exports.createBook = (req, res) => {
    jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
        if(authData['roles'] == "admin") {
            let values ={
                kode : req.body.kode,
                kategori : req.body.kategori,
                judul : req.body.judul,
                pengarang : req.body.pengarang,
                penerbit : req.body.penerbit,
                tahun_terbit : req.body.tahun_terbit,
                deskripsi : req.body.deskripsi,
                stok : req.body.stok,
                harga : req.body.harga,
                berat : req.body.berat
            }
            Book
            .create(values)
            .then((book) => {
                res.json(book);
            })
            .catch((error) => {
                console.log("Data gagal dimasukan");
            })
        } else {
            res.sendStatus(403);
        }
    })
    
}

//Memperbaharui data buku, dimana hanya roles = admin yang bisa mengakses
module.exports.updateBook = (req, res) => {
    jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
        if(authData['roles'] == "admin") {
            let values ={
                kode : req.body.kode,
                kategori : req.body.kategori,
                judul : req.body.judul,
                pengarang : req.body.pengarang,
                penerbit : req.body.penerbit,
                tahun_terbit : req.body.tahun_terbit,
                deskripsi : req.body.deskripsi,
                stok : req.body.stok,
                harga : req.body.harga,
                berat : req.body.berat
            }
            let condition ={
                where : {
                    id : req.params.id
                }
            }
            Book
            .update(values, condition)
            .then((book) => {
                res.json(book);
            })
            .catch((error) => {
                console.log("Data gagal diperbaharui");
            })
        } else {
            res.sendStatus(403);
        }
    })
}

//Menghapus data buku berdasarkan id, dimana hanya roles = admin yang bisa mengakses
module.exports.deleteBook = (req, res) => {
    jwt.verify(req.token, process.env.SECRETKEY, (error, authData) => {
        if(authData['roles'] == "admin") {
            let condition ={
                where : {
                    id : req.params.id
                }
            }
            Book
            .destroy(condition)
            .then((book) => {
                res.json(book);
                console.log("Data berhasil dihapus");
            })
            .catch((error) => {
                console.log("Data gagal dihapus");
            })
        } else {
            res.sendStatus(403);
        }
    })
}