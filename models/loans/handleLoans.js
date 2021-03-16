const model = require('./loan');
const mongooseWrap = require('../mongooseWrap');

exports.readLoans = async function(bookcopies){
    let idarray = [];
    bookcopies.forEach(function (bookcopy) {
        idarray.push(bookcopy._id);
    });

    try {
        let query = { _id : { $in : idarray } }
        let loans = await mongooseWrap.retrieve(model.Loan, query);
        return loans; 
    } catch (error) {
        console.log(error);
    }
}