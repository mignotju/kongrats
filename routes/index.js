var express = require('express');
var router = express.Router();
var server = require('../server/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  var server1 = new server();
  server1.readCSV(function(donnees) {
    console.log("Etape 2bis : Ok!");
    console.log(donnees);
  });

  res.render('index', { title: 'Kongrats' });
});

module.exports = router;
