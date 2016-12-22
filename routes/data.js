var express = require('express');
var router = express.Router();
var Parser = require('../server/parser');

/* GET data page. */
router.get('/', function(req, res, next) {
  var parser = new Parser();
  var listeMatiere = [];
  var listeFiliere = [];
  var visibiliteFiliere = 'listeFiliereNonVisible';
  parser.readCSV(function(feedbacks) {
    var feedbacksJson = {};
    feedbacksJson = feedbacks;
    res.render('data', { title : 'Retours', pageData: feedbacksJson,
      listeMatiere : listeMatiere, listeFiliere : listeFiliere, visibiliteFiliere : visibiliteFiliere});
  });
});


router.get('/:id', function(req, res, next) {
  var list1A = ['analyse','sport','RO','eco'];
  var list2A = ['innovation','AOD','SGBD'];
  var list3A = ['TF','GDRF','Management','Anglais'];
  console.log("je suis la, c'est la page : " + req.params.id );
  var listeMatiereSelectionnee = [];
  var visibiliteFiliere = 'listeFiliereVisible';
  var annee = req.params.id;
  if (annee == '1A') {
    listeSelectionnee = list1A;
  } else if (annee == '2A') {
    visibiliteFiliere = 'listeFiliereNonVisible';
    listeSelectionnee = list2A;
  } else if (annee == '3A') {
    listeSelectionnee = list3A;
  } else {
    console.log('big problem');
  }
  var feedbacksJson = {};
  res.render('data', { title : 'Retours', annee : annee, pageData: feedbacksJson,
    listeMatiere : listeMatiereSelectionnee, visibiliteFiliere : visibiliteFiliere});
});

router.get('/:matiere', function(req, res, next) {
  console.log("je suis la, c'est la page : " + req.params.id );
  var listeSelectionnee;
  var annee = req.params.id;
  if (annee == '1A') {
    listeSelectionnee = list1A;
  } else if (annee == '2A') {
    listeSelectionnee = list2A;
  } else if (annee == '3A') {
    listeSelectionnee = list3A;
  } else {
    console.log('big problem');
  }
  var feedbacksJson = {};
  res.render('data', { title : 'Retours', annee : annee, pageData: feedbacksJson, liste : listeSelectionnee});
});


module.exports = router;
