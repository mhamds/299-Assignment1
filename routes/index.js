var express = require('express');
var router = express.Router();
var app = express();

app.set('view engine', 'ejs');



// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Home' });
// });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/home');
});


/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('pages/home');
});


/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('pages/about');
});

/* GET Products page. */
router.get('/projects', function(req, res, next) {
  res.render('pages/projects');
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('pages/services');
});


/* GET Contact us page. */
router.get('/contact', function(req, res, next) {
  res.render('pages/contact');
});

module.exports = router;
