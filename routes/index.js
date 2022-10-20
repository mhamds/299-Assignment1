var express = require('express');
var router = express.Router();
var app = express();

app.set('view engine', 'ejs');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Pages/home'); 
});


/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('Pages/home');
});


/* GET About page. */
 router.get('/about', function(req, res, next) {
  res.render('Pages/about');
});


/* GET Products page. */
router.get('/projects', function(req, res, next) {
  res.render('Pages/projects');
});


/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('Pages/services');
});


/* GET Contact us page. */
router.get('/contact', function(req, res, next) {
  res.render('Pages/contact');
});



module.exports = router;
