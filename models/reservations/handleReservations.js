const model = require('./reservation');
const mongooseWrap = require('../mongooseWrap');

exports.readPersonReservations = async function(pid){

    try {
        let query = { "_id.pid": pid };
        let reservations = await mongooseWrap.retrieve(model.Reservation, query);
/*         let idarray = [];
        //pushing our bookcopy id's into new array
        reservations.forEach(function (reservation) {
            idarray.push(reservation._id.bookid);
        });
        return idarray;  */
        return reservations;
    } catch (error) {
        console.log(error);
    }
}

exports.makeReservation = async function(req, res, pid){
    let reservation = new model.Reservation({
        _id: {pid: pid, bookid: req.body.bookid},
        date: req.body.date
    })
    await mongooseWrap.save(reservation); 
}

exports.searchAndDelete = async function(pid, bookid){
    let query =  {_id: { 
        pid: pid,
        bookid: bookid
    }};
    let reservation = await mongooseWrap.retrieve(model.Reservation, query);

    if(reservation.length != 0){
        await mongooseWrap.delete(model.Reservation, query);
    }
}
