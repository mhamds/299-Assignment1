var express = require('express');
var router = express.Router();
var app = express();

app.set('view engine', 'ejs');

// router.get('/', (req, res) => {
//   res.render('index');
// });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('./pages/home');
// });


/* GET home page. */
// router.get('/home', function(req, res, next) {
//   res.render('./pages/home');
// });

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});


/* GET About page. */
// router.get('/about', function(req, res, next) {
//   res.render('./pages/about');
// });

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

/* GET Products page. */
// router.get('/projects', function(req, res, next) {
//   res.render('./pages/projects');
// });

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

/* GET Services page. */
// router.get('/services', function(req, res, next) {
//   res.render('./pages/services');
// });

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});


/* GET Contact us page. */
// router.get('/contact', function(req, res, next) {
//   res.render('./pages/contact');
// });

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'contact' });
});

module.exports = router;
