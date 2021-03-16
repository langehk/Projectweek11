const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    _id: Number,
    title: {type: String, unique: true},
    authors: [{firstname: String, 
        middlename: String,
        lastname: String}],
    copyright: String, 
    edition: Number, 
    published: {publisher: String, 
        place: String,
        year: Number}
})

const Book = mongoose.model("Book", bookSchema, 'books');

exports.Book = Book; 