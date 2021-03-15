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
        console.log(books);
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