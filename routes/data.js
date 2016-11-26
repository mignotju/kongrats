var express = require('express');
var router = express.Router();
var server = require('../server/index');

/* GET data page. */
router.get('/', function(req, res, next) {
  var server2 = new server();
  server2.readCSV(function(donnees) {
    var donneesJson = {};
    donneesJson.names = donnees[0];
    res.render('data', { title : 'Retours', pageData: donneesJson });
  });
});

module.exports = router;
