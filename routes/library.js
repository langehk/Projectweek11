var express = require('express');
var router = express.Router();
const handler = require('../models/books/handleBooks');

//Rendering of booksview (pug file)
router.get('/booksview', async function(req, res, next) {
  res.render('booksview', {
      title: 'Fragments of the World',
  });
});

//Books API
router.get('/books', async function(req, res, next) { 
  let books = await handler.readBooks(req, res); 
  res.json(books);
});

module.exports = router;