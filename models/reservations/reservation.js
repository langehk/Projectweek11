const mongoose = require("mongoose");

const reservationSchema = mongoose.Schema({
    _id: { 
        pid: String,
        bookid: Number
    },
        date: String
})

const Reservation = mongoose.model("Reservation", reservationSchema, 'reservations');

exports.Reservation = Reservation; 