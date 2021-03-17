var express = require('express');
var router = express.Router();
const handlerBooks = require('../models/books/handleBooks');
const handlerBookCopies = require('../models/bookcopies/handleBookCopies');
const handlerLoans = require('../models/loans/handleLoans');
const handlerPersons = require('../models/persons/handlePersons');
const handlerReservations = require('../models/reservations/handleReservations');
const { model } = require('mongoose');

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
router.get('/loan/:bookid', async function(req, res, next) {
  if(req.session.authenticated){
    let query = {email: req.session.user}
    let person = await handlerPersons.readPerson(req, res, query); //get user
    let bookid = req.params.bookid; //bookid
    let bookcopies = await handlerBookCopies.readCopies(bookid); //read bookcopies for that book
    let loans = await handlerLoans.readLoans(bookcopies); //read loans
    handlerLoans.makeLoan(req, res, person[0]._id, bookcopies, loans);
    res.redirect('../loansandreservations');
  }
  else{
    res.redirect('../../persons/login');
  }
});

router.post('/reserve', async function(req, res, next) {
  if(req.session.authenticated){
    let query = {email: req.session.user}
    let person = await handlerPersons.readPerson(req, res, query);
    handlerReservations.makeReservation(req, res, person[0]._id);
    res.redirect('./loansandreservations');
  }
  else{
    res.redirect('../persons/login');
  }
});



router.get('/loansandreservations', async function(req, res, next) {
  if(req.session.authenticated){
    let query = {email: req.session.user};
    let person = await handlerPersons.readPerson(req, res, query); //read user

    //LOANS
    let loans = await handlerLoans.readPersonLoans(person[0]._id); //read loans to that user
    let bookcopies = await handlerBookCopies.readLentCopies(loans); //read bookcopies with same loanids
    let lentbooks = await handlerBooks.readBooksInfo(bookcopies); //read books with bookcopy ids 

    //RESERVATIONS
    let reservations = await handlerReservations.readPersonReservations(person[0]._id);
    let reservedbooks = await handlerBooks.readBooksInfo(reservations); 

    res.render('loansandreservations', { lentbooks, reservedbooks });  
  }
  else{
    res.redirect('../persons/login'); //not logged in
  }
    
});

module.exports = router;