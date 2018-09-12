const express = require('express');
const router = express.Router();

const models = require('../../models/index');
const BookDbHelper = require('../../helpers/db/book');

router.get('/', async function (request, response) {
    const books = await BookDbHelper.getAllBooks();
    const data = [];
    for (const book of books) {
        data.push({
            id: book.id,
            price: book.price,
            book: book.book,
            user: book.user
        })
    }
    response.render('index', {data});
})



module.exports = router;