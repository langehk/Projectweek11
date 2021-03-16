const model = require('./reservation');
const mongooseWrap = require('../mongooseWrap');

exports.readPersonReservations = async function(pid){

    try {
        let query = { "_id.pid": pid };
        let reservations = await mongooseWrap.retrieve(model.Reservation, query);
        let idarray = [];
        //pushing our bookcopy id's into new array
        reservations.forEach(function (reservation) {
            idarray.push(reservation._id.bookid);
        });
        return idarray; 
    } catch (error) {
        console.log(error);
    }
}
