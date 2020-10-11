const user = {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}

const book = {
    title: { type: String },
    author: { type: String },
    genre: { type: String },
    yearPublished: { type: String },
    dateAdded: { type: Date, default: Date.now() },
}

module.exports = {
    book,
    user,
}