var express = require('express');
// Why do we use express.Router() here, instead of express()?
// express.Router() creates an instance of middleware and routes. It's like a 'mini-application' with just routing abilities built in.
// You can use router for adding middlware or routes.
var router = express.Router();

/* GET users listing. */
// Note: This is actually get '/users', because we write app.use('/users', usersRouter) in app, and usersRouter refers to this router.
// If we were to get('/profile') or something like that in this file, it would signify '/users/profile' because '/users' prefixes all of the routes in this file.

// The callback here is known as a route handler - when a request's route matches '/users', this callback will be invoked
// Req and res here: Every route handler gets access to the request and response objects of the http request

// What's 'next' all about? The next() method will call the next route handler that matches this route.
// That can be useful if multiple route handlers are used on a single http request.
// Note: calling next() inside a route handler will only move us to the next route handler. It will never go to middleware.
// This is why middleware needs to be set up above route handlers.

// A route handler must either end the request OR call the next route handler. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
