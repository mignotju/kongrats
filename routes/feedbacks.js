var express = require('express');
var router = express.Router();
var Parser = require('../server/parser');

router.get('/:annee/:code/:matiere', function(req, res, next) {
  var parser = new Parser('/../enseignements-'+req.params.annee+'.csv');
  parser.parserFeedbacks(req.params.code, function(feedbacks) {
    var sumQualiteGlobale = 0;
    var sumQualiteSupports = 0;
    var sumPertinence = 0;
    for (var i = 1; i < feedbacks.length; i++) {
      var row = feedbacks[i];
      for (var j = 0; j < row.length-1; j++) {
        var note = parseInt(row[j]);
        if (j == 0) {
          sumQualiteGlobale += note;
        } else if (j == 1) {
          sumQualiteSupports += note;
        } else if (j == 2) {
          sumPertinence += note;
        }
      }
    }
    var moyQualiteGlobale = (sumQualiteGlobale/(feedbacks.length - 1)).toPrecision(2);
    var moyQualiteSupports = (sumQualiteSupports/(feedbacks.length - 1)).toPrecision(2);
    var moyPertinence = (sumPertinence/(feedbacks.length - 1)).toPrecision(2);
    if (req.params.matiere == "Revue globale") {
      moyPertinence = -1;
    }
    res.render('feedbacks', { title : 'Feedbacks', feedbacks: feedbacks,
      matiere : req.params.matiere, annee : req.params.annee,
      moyQualiteGlobale: moyQualiteGlobale, moyQualiteSupports: moyQualiteSupports, moyPertinence: moyPertinence});
  });
});

module.exports = router;
