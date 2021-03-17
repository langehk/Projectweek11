const model = require('./loan');
const mongooseWrap = require('../mongooseWrap');
const getDate = require('../../lib/date');
const handlerReservations = require('../reservations/handleReservations');

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

exports.readLoan = async function(id){

    try {
        let query = { _id : id };
        let loan = await mongooseWrap.retrieve(model.Loan, query);
        return loan; 
    } catch (error) {
        console.log(error);
    }
}

exports.makeLoan = async function(req, res, pid, bookcopies, loans){

    let bookcopyid; 

    if(loans.length > 0){
        //Check which bookcopy ids are NOT in loans array
        //To make sure we loan a book that's available 
        async function findAvalBook(){
             for (let i = 0; i < bookcopies.length; i++) {
                here: {
                    for (let y = 0; y < loans.length; y++) {
                        //console.log('Loans: ' + loans[y]._id);
                        if(bookcopies[i]._id == loans[y]._id){
                            if(i == 0){
                                bookcopies.splice(0,1);
                            }
                            else{
                                bookcopies.splice(i, i);
                            }
                            break here;
                        } 
                        if(bookcopies[i]._id !== loans[y]._id){
                            let tempBookcopyid = bookcopies[i]._id; 
                            console.log("temp: " + tempBookcopyid);
                            return tempBookcopyid;    
                        }
                        
                    }
                
                }
            }
        };

        bookcopyid = await findAvalBook(); 
       
    }
    
    else {
        bookcopyid = bookcopies[0]._id;
    }
    
    let loan = new model.Loan({
        _id: bookcopyid,
        date: getDate.formatDate(),
        pid: pid,
    })
    await mongooseWrap.save(loan); 
}

exports.return = async function(req, res, loanid, pid){
    let query = {_id: loanid}
    await mongooseWrap.delete(model.Loan, query); 
}