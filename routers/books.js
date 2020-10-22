const bookRouter = require('express').Router();

/**
 * @api {get} /api/books Fetch all the available books.
 * @apiName GetBook
 * @apiGroup Books
 * @apiVersion 0.1.0
 *
 * @apiSuccess {object[]} books List of all books.
 * @apiSuccess {String} title Title of the book.
 * @apiSuccess {String} author Author of the book.
 * @apiSuccess {String} genre Genre of the book.
 * @apiSuccess {String} yearPublished Publication Year.
 * @apiSuccess {Data} dateAdded Date at which the book was added
 *
 * @apiSuccessExample {json} Success-Response:
 * 		HTTP/1.1 200 OK
 * 		[
 * 			{
 * 				"title": "A very cool book",
 * 				"author": "A very cool author",
 * 				"genre": "Not so cool genre",
 * 				"yearPublished": "2019",
 * 				"dateAdded": "22-05-2019"
 * 			}
 * 		]
 */
bookRouter.get('/', (req, res) => {
	console.log('GET');
	res.send('Hello World!');
});

/**
 * @api {get} /api/books/:id Fetch a Single Book by its Id.
 * @apiName GetBook
 * @apiGroup Books
 * @apiVersion 0.1.0
 *
 *@apiParam {String} id Id of the Book being fetched.
 *
 * @apiSuccess {object} book A single Book.
 * @apiSuccess {String} title Title of the book.
 * @apiSuccess {String} author Author of the book.
 * @apiSuccess {String} genre Genre of the book.
 * @apiSuccess {String} yearPublished Publication Year.
 * @apiSuccess {Data} dateAdded Date at which the book was added
 *
 * @apiSuccessExample {json} Success-Response:
 * 		HTTP/1.1 200 OK
 * 		{
 * 			"title": "A very cool book",
 * 			"author": "A very cool author",
 * 			"genre": "Not so cool genre",
 * 			"yearPublished": "2019",
 * 			"dateAdded": "22-05-2019"
 * 		}
 */
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

/**
 * @api {put} /api/books/:id Update a Single Book by its Id.
 * @apiName PutBook
 * @apiGroup Books
 * @apiVersion 0.1.0
 *
 *@apiParam {String} id Id of the Book being fetched.
 *
 * @apiSuccess {object} book A single Book.
 * @apiSuccess {String} title Title of the book.
 * @apiSuccess {String} author Author of the book.
 * @apiSuccess {String} genre Genre of the book.
 * @apiSuccess {String} yearPublished Publication Year.
 * @apiSuccess {Data} dateAdded Date at which the book was added
 *
 * @apiSuccessExample {json} Success-Response:
 * 		HTTP/1.1 200 OK
 * 		{
 * 			"title": "A very cool book",
 * 			"author": "A very cool author",
 * 			"genre": "Not so cool genre",
 * 			"yearPublished": "2019",
 * 			"dateAdded": "22-05-2019"
 * 		}
 */
bookRouter.put('/', (req, res) => {
	console.log('PUT');
	res.send('Got a PUT request at /user');
});

/**
 * @api {delete} /api/books/:id Delete a Single Book by its Id.
 * @apiName DeleteBook
 * @apiGroup Books
 * @apiVersion 0.1.0
 *
 *@apiParam {String} id Id of the Book being fetched.
 *
 * @apiSuccessExample {json} Success-Response:
 * 		HTTP/1.1 204 OK
 */
bookRouter.delete('/', (req, res) => {
	console.log('DELETE');
	res.send('Got a DELETE request at /user');
});

module.exports = bookRouter;
