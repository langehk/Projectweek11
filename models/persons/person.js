const mongoose = require("mongoose");

const personSchema = mongoose.Schema({
    cpr: Number,
    currentpenalties: Number,
    email: String,
    firstname: String, 
    lastname: String,
    middlename: String, 
    newsletter: Boolean,
    password: String
});

const Person = mongoose.model("Person", personSchema, 'persons');

exports.Person = Person; 