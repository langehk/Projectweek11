var express = require('express');
var router = express.Router();
const handlerBooks = require('../models/books/handleBooks');
const handlerBookCopies = require('../models/bookcopies/handleBookCopies');
const handlerLoans = require('../models/loans/handleLoans');

//Details page
router.get('/books/:booktitle', async function(req, res, next) {
  let book = await handlerBooks.readDetails(req.params.booktitle); 
  
/*   if(req.session.authenticated){
    console.log('Logged in');
  }
  else {
    console.log('Not logged in');
  } */

  let bookcopies = await handlerBookCopies.readCopies(book[0]._id); //read copies
  let loans = await handlerLoans.readLoans(bookcopies); //read loans

  if(bookcopies.length == loans.length){ //If loans.length are the same as copies.length there's no available books
    availability = false; 
    console.log('Not available');
  }
  else{
    availability = true; 
  }
  res.render('details', { book, availability });
});

//Books page
router.get('/books', async function(req, res, next) {
  let books = await handlerBooks.readBooks(req, res); 
  res.render('books', { books });
});


//Loan and reserve
router.get('/loan', async function(req, res, next) {
  let books = await handlerBooks.readBooks(req, res); 
  res.render('books', { books });
});

router.get('/reserve', async function(req, res, next) {
  let books = await handlerBooks.readBooks(req, res); 
  res.render('books', { books });
});

module.exports = router;