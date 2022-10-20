var express = require('express');
var router = express.Router();
var app = express();

app.set('view engine', 'ejs');

// router.get('/', (req, res) => {
//   res.render('index');
// });

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('home', { title: 'Home' });
// });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Pages/home'); 
});


/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('Pages/home');
});

/* GET home page. */
// router.get('/home', function(req, res, next) {
//   res.render('Pages/Home', { title: 'Home' });
// });


/* GET About page. */
 router.get('/about', function(req, res, next) {
  res.render('Pages/about');
});

/* GET About page. */
// router.get('/about', function(req, res, next) {
//   res.render('Pages/About', { title: 'About' });
// });

/* GET Products page. */
router.get('/projects', function(req, res, next) {
  res.render('Pages/projects');
});

/* GET Projects page. */
// router.get('/projects', function(req, res, next) {
//   res.render('Pages/Projects', { title: 'Projects' });
// });

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('Pages/services');
});

/* GET Services page. */
// router.get('/services', function(req, res, next) {
//   res.render('Pages/Services', { title: 'Services' });
// });


/* GET Contact us page. */
router.get('/contact', function(req, res, next) {
  res.render('Pages/contact');
});

/* GET Contact page. */
// router.get('/contact', function(req, res, next) {
//   res.render('Pages/Contact', { title: 'contact' });
// });

module.exports = router;
