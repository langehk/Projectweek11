const mongoose = require("mongoose");

const loanSchema = mongoose.Schema({
    _id: Number,
    date: String, 
    pid: Number
})

const Loan = mongoose.model("Loan", loanSchema, 'loans');

exports.Loan = Loan; 