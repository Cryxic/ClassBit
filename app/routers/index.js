const express = require('express');
const router = express.Router();

const models = require('../../models/index');
const BookDbHelper = require('../../helpers/db/book');

router.get('/', async function (request, response) {
    const books = await BookDbHelper.getAllBooks();
    response.render('index', {books});
})



module.exports = router;