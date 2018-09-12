'use strict'
const express = require('express');
const router = express.Router();

const BookDbHelper = require('../../helpers/db/book');

router.get('/', async function(request, response) {
    const id = request.query.id;
    const book = await BookDbHelper.getBookById(id);
    response.render('product', {book}); 
});

module.exports = router;