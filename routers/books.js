const bookRouter = require('express').Router();
const { bookDoc } = require('../db/mongoose');
const { param, body, validationResult } = require('express-validator');

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
 * @apiSuccess {Date} dateAdded Date at which the book was added
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
bookRouter.get('/', async (req, res) => {
	try {
		const books = await bookDoc.find({});
		if (!books) {
			throw new Error('No books were found');
		}
		return res.json(books);
	} catch (e) {
		console.error(e);
		return res.sendStatus(500);
	}
});

/**
 * @api {get} /api/books/:id Fetch a Single Book by its Id.
 * @apiName GetBook
 * @apiGroup Books
 * @apiVersion 0.1.0
 *
 * @apiParam {String} id Id of the Book being fetched.
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
 * @apiParam {String} id Id of the Book being updated.
 *
 * @apiSuccess {object} book A single Book.
 * @apiSuccess {String} title Title of the book.
 * @apiSuccess {String} author Author of the book.
 * @apiSuccess {String} genre Genre of the book.
 * @apiSuccess {String} yearPublished Publication Year.
 * @apiSuccess {Date} dateAdded Date at which the book was added.
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
 * @apiParam {String} id Id of the Book being deleted.
 *
 * @apiSuccessExample {json} Success-Response:
 * 		HTTP/1.1 200 OK
 */
bookRouter.delete('/:id', [param('id').isMongoId()], async (req, res) => {
	try {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const book = await bookDoc.findByIdAndRemove(req.params.id);

		if (!book) {
			return res.sendStatus(404);
		}

		res.sendStatus(200);
	} catch (e) {
		console.error(e);
		return res.sendStatus(500);
	}
});

/**
 * @api {post} /api/books Create a New Book.
 * @apiName PostBook
 * @apiGroup Books
 * @apiVersion 0.1.0
 *
 * @apiSuccess {object} book Newly created Book.
 * @apiSuccess {String} title Title of the book.
 * @apiSuccess {String} author Author of the book.
 * @apiSuccess {String} genre Genre of the book.
 * @apiSuccess {String} yearPublished Publication Year.
 * @apiSuccess {Date} dateAdded Date at which the book was added.
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
bookRouter.post(
	'/',
	[
		body('title').isString(),
		body('author').isString(),
		body('genre').isString(),
		body('yearPublished').isString(),
		body().custom((body) => (Object.keys(body).length < 5 ? Promise.resolve() : Promise.reject())),
	],
	async (req, res) => {
		try {
			const errors = validationResult(req);

			if (!errors.isEmpty()) {
				return res.status(400).json({ errors: errors.array() });
			}

			const body = req.body;

			const newBook = new bookDoc({
				title: body.title,
				author: body.author,
				genre: body.genre,
				yearPublished: body.yearPublished,
				dateAdded: new Date(),
			});

			const bookRes = await newBook.save();

			if (!bookRes) {
				throw new Error('failed to make book');
			}

			return res.json(bookRes);
		} catch (e) {
			console.error(e);
			res.sendStatus(500);
		}
	}
);
module.exports = bookRouter;
