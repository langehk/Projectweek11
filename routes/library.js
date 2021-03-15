var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/books', function(req, res, next) {
  //MISSING: read books and send data with
  res.render('books', { title: 'Express' });
});

module.exports = router;