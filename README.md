# express-tutorial

This repo and the accompanying notes come from the [MDN Express/Node tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction). Much gratitude to the folks at MDN for putting together such thorough web development learning resources.
### [Route and router notes](./routes/route_notes.md)

### [Model notes](./models/model_notes.md)

### [Controller notes](./controllers/controller_notes.md)

### Additional notes

#### Async
- Async is a node module that helps us keep track of multiple asynchronous requests
- Async is helpful because it allows us to run requests in parallel (or other formations) instead of just chaining all of our requests. Chaining all of our requests may be ineffecient and not the fastest approach. Async allows us to run requests in parallel and then have a single callback that runs when all the requests have completed.
- `async.series`: Ensures that async operations are performed in series
- `async.parallel`: Executes async operations in parallel
  - First argument: collection of async functions to run
  - `async.parallel` passes each of those functions a `callback(err, result)` which it calls on completion
  - Optional second argument: callback that will run when all of the async functions have completed
        - The params of this callback are an error argument and a result collection with the results of all the async functions
