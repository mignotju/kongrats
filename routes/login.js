var express = require('express');
var router = express.Router();
var passport = require('passport');

// Define routes.
router.get('/',
  function(req, res){
    res.render('login', { title : 'Login'});
  });

router.post('/',
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/matieres');
  });

module.exports = router;
