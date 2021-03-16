const model = require('./loan');
const mongooseWrap = require('../mongooseWrap');

exports.readLoans = async function(bookcopies){
    let idarray = [];
    //pushing our bookcopy id's into new array
    bookcopies.forEach(function (bookcopy) {
        idarray.push(bookcopy._id);
    });

    try {
        let query = { _id : { $in : idarray } } //query to search for loans on these bookcopies
        let loans = await mongooseWrap.retrieve(model.Loan, query);
        return loans; 
    } catch (error) {
        console.log(error);
    }
}

exports.readPersonLoans = async function(pid){

    try {
        let query = { pid : pid };
        let loans = await mongooseWrap.retrieve(model.Loan, query);
        console.log(loans);
        return loans; 
    } catch (error) {
        console.log(error);
    }
}