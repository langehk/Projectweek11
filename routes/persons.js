var express = require('express');
var router = express.Router();
const handler = require('../models/persons/handlePersons');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/createperson', function(req, res, next) {
  res.render('createperson', { title: 'Express' });
});

router.post('/createperson', async function(req, res, next) {
  handler.postPerson(req, res);
});


router.post('/login', async function(req, res, next) { 
  let query = {email: req.body.email};
  handler.readPerson(req, res, query).
    then(async function(personinfo) {
        const loggedin = await handler.comparePassword(req.body.password, personinfo, req);
        if(loggedin){
          res.redirect('../library/loansandreservations'); //list of books
        }
        else{
          //res.render('login', { title: 'Express' });
        }
    });
});

module.exports = router;
