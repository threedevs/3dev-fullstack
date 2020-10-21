const bookRouter = require('express').Router();

/** get all books. */
bookRouter.get('/', (req, res) => {
  console.log('GET');
  res.send('Hello World!');
});

/** get a single book by id. */
bookRouter.get('/:id', (req, res) => {
  console.log('GET');
  //how to get id?
  res.send('Hello World!');
});

/** search multiple by title */
bookRouter.get('/s/:search', (req, res) => {
  console.log('GET');
  res.send('Hello World!');
});

/** TODO the update-route */
bookRouter.put('/', (req, res) => {
  console.log('PUT');
  res.send('Got a PUT request at /user');
});

/** TODO the delete-route */
bookRouter.delete('/', (req, res) => {
  console.log('DELETE');
  res.send('Got a DELETE request at /user');
});

module.exports = bookRouter;
