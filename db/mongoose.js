const mongoose = require('mongoose')
const schemas = require("./schemas")
const Bcrypt = require("bcryptjs")

const mongoURI = 'mongodb://127.0.0.1:27017/library'

const optionsMoongoose = {
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
}

mongoose.connection.on('error', err => console.error(err))
mongoose.connection.once('open', () => console.log("connection established to mongodb"))
mongoose.connect(mongoURI, optionsMoongoose)


const userSchema = mongoose.Schema(schemas.user)
userSchema.pre("save", function (next) {
    if (!this.isModified("password")) {
        return next()
    }
    this.password = Bcrypt.hashSync(this.password, 10)
    next()
});
const userDoc = mongoose.model('user', userSchema)

const bookSchema = mongoose.Schema(schemas.book)
const bookDoc = mongoose.model('book', bookSchema)

module.exports = {
    db: mongoose,
    bookDoc,
    userDoc,
}