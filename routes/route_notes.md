# Routes and routers

- Route: section of Express code that associates an HTTP verb (GET, etc.), a URL path, and a function to determine what happens when that route pattern shows up
- express.Router allows us to group the route handlers for a particular URL path
- Using express.Router is very similar to creating routes in our app file directly on the express application object. A difference is that Router provides support for modularization.
- In order to access route modules in our main app file, we `require(myRoute)` the module and then use `app.use('/myRoute, myRoute)` to add the router to the middleware handling path.


### Router callbacks

The router callback takes 3 arguments, usually called `req`, `res`, and `next`. 
- `req` refers to the HTTP Request object
- `res` refers to the HTTP response
- `next` refers to the next function in the middleware chain

Because router functions are Express middleware, they must either complete the request or call the next function in the middleware chain.

In the below example, we complete the request with `res.send()`. So we don't need to include `next` in our params.

Some other response methods that would complete the request/response cycle are: `res.end()`, `res.render()` (render a view template), `res.json` (send a JSON response) and `res.download` (prompt a file to be downloaded), among others.

```
router.get('/about', function (req, res) {
  res.send('About this wiki');
})
```

And in the below example, in the first router callback we don't complete the request. We call `next()` which will call the next function in the middleware chain. Each function will be called in the order that it is added to the middleware chain.

```
router.get('/about', function (req, res, next) {
  console.log('about us');
  next();
})

router.get('/about', function (req, res) {
  res.send('About this wiki');
})
```

### Route params

- Route parameters = named URL segments that are used to capture values at specific positions in the URL
- These values are stored in the `req.params` object, using the param names as keys

```
router.get('/users/:userId/books), (req, res) => {
    const userId = req.params.userId
    res.send(`Your user id is ${userId}`)
}
```
