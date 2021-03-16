const mongoose = require("mongoose");

const bookcopySchema = mongoose.Schema({
    _id: Number,
    bookid : Number
})

const Bookcopy = mongoose.model("Bookcopy", bookcopySchema, 'bookcopies');

exports.Bookcopy = Bookcopy; 