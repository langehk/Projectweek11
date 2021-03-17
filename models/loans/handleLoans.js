const model = require('./loan');
const mongooseWrap = require('../mongooseWrap');

//Reading lent books with bookcopies as parameter
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

//Reading lent books to user
exports.readPersonLoans = async function(pid){

    try {
        let query = { pid : pid };
        let loans = await mongooseWrap.retrieve(model.Loan, query);
        return loans; 
    } catch (error) {
        console.log(error);
    }
}

exports.makeLoan = async function(req, res, pid, bookcopies, loans){

    let bookcopyid; 
    if(loans.length > 0){
        //Check which bookcopy ids are NOT in loans array
        for (let i = 0; i < bookcopies.length; i++) {
            for (let y = 0; y < loans.length; y++) {
                if(bookcopies[i]._id != loans[y]._id){
                    bookcopyid = bookcopies[i]._id; 
                    break;
                }
            }
        }
    }
    else {
        bookcopyid = bookcopies[0]._id;
    }

    let loan = new model.Loan({
        _id: bookcopyid,
        date: "2021-03-10",
        pid: pid,
    })
    await mongooseWrap.save(loan); 

    console.log(loan);
}