const mongoose = require('mongoose');
const schemas = require('./schemas');
const Bcrypt = require('bcryptjs');
const uniqueValidator = require('mongoose-unique-validator');
const faker = require('faker');

//const mongoURI = 'mongodb://127.0.0.1:27017/library';
const mongoURI = 'mongodb://127.0.0.1:27001, 127.0.0.1:27002, 127.0.0.1:27003/library?replicaSet=mongo-rs&readPreference=primary&ssl=false';

const optionsMoongoose = {
	useCreateIndex: true,
	useFindAndModify: false,
	useUnifiedTopology: true,
	useNewUrlParser: true,
};

mongoose.connect(mongoURI, optionsMoongoose);

const userSchema = mongoose.Schema(schemas.user);
userSchema.plugin(uniqueValidator);
userSchema.pre('save', function (next) {
	if (!this.isModified('password')) {
		return next();
	}
	this.password = Bcrypt.hashSync(this.password, 10);
	next();
});

const userDoc = mongoose.model('user', userSchema);

const bookSchema = mongoose.Schema(schemas.book);
const bookDoc = mongoose.model('book', bookSchema);

mongoose.connection.on('error', (err) => console.error(err));
mongoose.connection.once('open', () => {
	(async () => {
		/**
		 * add books if development and none are there
		 */
		if (process.env.NODE_ENV !== 'production' && !(await bookDoc.findOne({}))) {
			console.log('no books found in development, trying to add 500');
			for (let i = 0; i < 500; i++) {
				const resBook = await bookDoc.create({
					title: faker.random.word(),
					author: faker.name.lastName(),
					genre: faker.commerce.department(),
					yearPublished: faker.random.number(),
				});
				if (!resBook) {
					throw new Error('failed to add a book');
				}
			}
		}
	})().catch((err) => console.error(err));

	console.log('connection established to mongodb');
});

module.exports = {
	db: mongoose,
	bookDoc,
	userDoc,
};
