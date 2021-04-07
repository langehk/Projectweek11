const mongoose = require("mongoose");

const personSchema = mongoose.Schema({
    //_id: Number,
    cpr: {type: Number, unique: true, required: true},
    currentpenalties: {type: Number, max: [1000, "It's too much"]},
    email: {type: String, unique: true},
    firstname: String, 
    lastname: String,
    middlename: String, 
    newsletter: Boolean,
    password: String,
    membersince: {type: Date, default: Date.now}
});

const Person = mongoose.model("Person", personSchema, 'persons');

exports.Person = Person; 