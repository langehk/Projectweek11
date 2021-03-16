var express = require('express');
var router = express.Router();
const handler = require('../models/books/handleBooks');

//Details page
router.get('/books/:booktitle', async function(req, res, next) {
  let book = await handler.readDetails(req.params.booktitle); 
  let status = 'Loan';
  console.log(book);
  res.render('details', { book, status });
});

//Books page
router.get('/books', async function(req, res, next) {
  let books = await handler.readBooks(req, res); 
  res.render('books', { books });
});

module.exports = router;