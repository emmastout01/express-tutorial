var express = require('express');
var router = express.Router();

/* GET users listing. */
// Note: This is actually get '/users', because we write app.use('/users', usersRouter) in app, and usersRouter refers to this router.
// If we were to get('/profile') or something like that in this file, it would signify '/users/profile' because '/users' prefixes all of the routes in this file.
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
