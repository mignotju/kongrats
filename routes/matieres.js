var express = require('express');
var router = express.Router();
var Parser = require('../server/parser');

/* GET data page. */
router.get('/', function(req, res, next) {
  var parser = new Parser('/../Liste_matieres.csv');
  parser.readCSV(function(liste) {
    var liste_matieres = {};
    liste_matieres = liste;
    res.render('matieres', { title : 'Retours', liste_matieres: liste_matieres });
  });
});

module.exports = router;
