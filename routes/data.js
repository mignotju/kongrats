var express = require('express');
var router = express.Router();
var Parser = require('../server/parser');

/* GET data page. */
router.get('/', function(req, res, next) {
  var parser = new Parser();
  parser.readCSV(function(feedbacks) {
    var feedbacksJson = {};
    feedbacksJson = feedbacks;
    res.render('data', { title : 'Retours', pageData: feedbacksJson });
  });
});

module.exports = router;
