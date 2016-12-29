var express = require('express');
var router = express.Router();
var Parser = require('../server/parser');

router.get('/:annee/:code/:matiere', function(req, res, next) {
  var parser = new Parser('/../enseignements-'+req.params.annee+'.csv');
  parser.parserFeedbacks(req.params.code, function(feedbacks) {
    var feedbacksJson = {};
    feedbacksJson = feedbacks;
    res.render('feedbacks', { title : 'Feedbacks', feedbacks: feedbacksJson, matiere : req.params.matiere });
  });
});

module.exports = router;
