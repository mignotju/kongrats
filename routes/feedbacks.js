var express = require('express');
var router = express.Router();
var Parser = require('../server/parser');

/* GET data page. */
router.get('/', function(req, res, next) {
  var parser = new Parser('/../enseignements.csv');
  parser.readCSV(function(feedbacks) {
    var feedbacksJson = {};
    feedbacksJson = feedbacks;
    res.render('feedbacks', { title : 'Retours', feedbacks: feedbacksJson });
  });
});

module.exports = router;
