const mongoose = require("mongoose");

const loanSchema = mongoose.Schema({
    date: String, 
    pid: Number
})

const Loan = mongoose.Model("Loan", loanSchema, 'loans');

exports.Loan = Loan; 