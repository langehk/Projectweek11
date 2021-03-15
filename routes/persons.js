var express = require('express');
var router = express.Router();
const handler = require('../models/persons/handlePersons');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post('/login', async function(req, res, next) { 
  handler.readPassword(req).
    then(async function(hash) {
        const loggedin = await handler.comparePassword(req.body.password, hash);
        if(loggedin){
          res.redirect('../library/books'); //list of books
        }
        else{
          //res.render('login', { title: 'Express' });
        }
    });
});

module.exports = router;
