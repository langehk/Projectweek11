const mongoose = require("mongoose");

const bookcopySchema = mongoose.Schema({
    bookid = Number
})

const Bookcopy = mongoose.Model("Bookcopy", bookcopySchema, 'bookcopies');

exports.Bookcopy = Bookcopy; 