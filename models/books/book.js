const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    title: String,
    authors: [{firstname: String, 
        middlename: String,
        lastname: String}],
    copyright: String, 
    edition: Number, 
    published: {publisher: String, 
        place: String,
        year: Number}
})

const book = mongoose.Model("Book", bookSchema, 'books');