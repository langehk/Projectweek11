const mongoose = require("mongoose");

const reservationSchema = mongoose.Schema({
    pid: Number,
    bookid: Number,
    date: String
})

const Reservation = mongoose.model("Reservation", reservationSchema, 'reservations');

exports.Reservation = Reservation; 