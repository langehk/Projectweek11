const model = require('./book');
const mongooseWrap = require('../mongooseWrap');

exports.readBooks = async function(req, res){
    try {

        let SORT = {
            sort: {
                title: 1
            }
        }

        let books = await mongooseWrap.retrieveAndSort(model.Book, SORT);
        return books; 
    } catch (error) {
        console.log(error);
    }
}

exports.readDetails = async function(title){
    try {
        let book = await mongooseWrap.retrieve(model.Book, {title: title})
        return book;
    } catch (error) {
        
    }
}

//Finding bookinfo on lent books
exports.readBooksInfo = async function(bookids){ //bookids = array of id's
    try {
        let query = { _id : { $all : bookids } } //query to search for loans on these bookcopies
        let books = await mongooseWrap.retrieve(model.Book, query);
        return books; 
    } catch (error) {
        console.log(error);
    }
}

