var express = require('express');
var router = express.Router();
var Parser = require('../server/parser');

/* GET data page. */
router.get('/', function(req, res, next) {
  var parser = new Parser('/../Liste_matieres.csv');
  parser.readCSV(function(liste) {
    res.render('matieres', { title : 'Liste des matières', listeMatieres: liste });
  });
});

module.exports = router;
