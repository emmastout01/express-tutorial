var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // Res.render will render a specific template (in this case, views/index, as specified in app.js)
  // The second param is an object will the names of any variables used in the template
  // res.render('index', { title: 'Wonderland' });

  // Updating this route to redirect to /catalog:
  res.redirect('/catalog');
});

module.exports = router;
