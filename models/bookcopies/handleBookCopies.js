const model = require('./bookcopy');
const mongooseWrap = require('../mongooseWrap');

exports.readCopies = async function(bookid){
    try {

        let query = {
            bookid : bookid
        }

        let copies = await mongooseWrap.retrieve(model.Bookcopy, query);
        return copies; 
    } catch (error) {
        console.log(error);
    }
}

exports.readLentCopies = async function(loans){
    let idarray = [];
    let bookIdarray = [];
    //pushing our bookcopy id's into new array
    loans.forEach(function (loan) {
        idarray.push(loan._id);
    });

    try {
        let query = { _id : { $in : idarray } } //query to search for loans on these bookcopies
        let bookcopies = await mongooseWrap.retrieve(model.Bookcopy, query);
        bookcopies.forEach(function (bookcopy) {
            bookIdarray.push(bookcopy.bookid);
        });
        return bookIdarray; 
    } catch (error) {
        console.log(error);
    }
}