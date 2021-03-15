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
  let log = await handler.comparePassword(req, res);
  if(log){
    res.render('books', { title: 'Express' });
  }
  else{
    res.render('login', { title: 'Express' });
  }
});

module.exports = router;
