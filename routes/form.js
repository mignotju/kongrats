var express = require('express');
var bodyParser = require("body-parser");
var router = express.Router();
var server = express();
var $ = require('jquery');


router.get('/', function(req, res, next) {
  res.render('form', { title: 'Kongrats' });
});


// server.use(bodyParser.urlencoded({ extended: true }));

// server.post('/reponse', function(req, res) {
//   console.log("saluuuuuuut");
//   console.log(req.body);
//   // res.render('data', { title: 'Kongrats' });
// });

module.exports = router;
// module.exports = server;
