const mongoose = require("mongoose");

const personSchema = mongoose.Schema({
    cpr: {type: Number, unique: true},
    currentpenalties: Number,
    email: {type: String, unique: true},
    firstname: String, 
    lastname: String,
    middlename: String, 
    newsletter: Boolean,
    password: String
});

const Person = mongoose.model("Person", personSchema, 'persons');

exports.Person = Person; 