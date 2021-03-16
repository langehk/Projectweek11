const model = require('./bookcopy');
const mongooseWrap = require('../mongooseWrap');

exports.readCopies = async function(bookid){
    try {

        let query = {
            bookid : bookid
        }

        let copies = await mongooseWrap.retrieve(model.Bookcopy, query);
        console.log(copies);
        return copies; 
    } catch (error) {
        console.log(error);
    }
}