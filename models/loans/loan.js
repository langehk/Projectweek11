const mongoose = require("mongoose");

const loanSchema = mongoose.Schema({
    _id: Number,
    date: String, 
    pid: String
})

const Loan = mongoose.model("Loan", loanSchema, 'loans');

exports.Loan = Loan; 