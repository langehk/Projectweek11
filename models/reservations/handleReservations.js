const model = require('./reservation');
const mongooseWrap = require('../mongooseWrap');

exports.readPersonReservations = async function(pid){

    try {
        let query = { "_id.pid": 577 };
        let reservations = await mongooseWrap.retrieve(model.Reservation, query);
        console.log(reservations);
        return reservations; 
    } catch (error) {
        console.log(error);
    }
}


//db.messages.find( { headers : { From: "reservations@marriott.com" } } )