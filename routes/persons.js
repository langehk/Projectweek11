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

router.post('/login', function(req, res, next) {
  handler.comparePassword(req, res);
});

module.exports = router;
