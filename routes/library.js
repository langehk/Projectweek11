var express = require('express');
var router = express.Router();
const handler = require('../models/books/handleBooks');

/* GET home page. */
router.get('/books', async function(req, res, next) {
  //MISSING: read books and send data with
  let books = await handler.readBooks(req, res); 
  res.render('books', { books });
});

module.exports = router;