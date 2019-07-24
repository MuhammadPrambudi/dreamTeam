const express = require('express');

const router = express.Router();

const bookController = require('../controllers/book');

const auth = require('../configs/auth');

// router.get('/', auth.verifyToken, bookController.getIndexBook);

router.post('/', auth.verifyToken, bookController.createBook);
router.put('/:id', auth.verifyToken, bookController.updateBook);
router.delete('/:id', auth.verifyToken, bookController.deleteBook);

module.exports = router;