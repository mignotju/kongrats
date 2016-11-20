var express = require('express');
var router = express.Router();
var Server = require('../server/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  var server = new Server()
  server.readCSV()
  res.render('index', { title: 'Kongrats' });
});

module.exports = router;
